import {
  streamText,
  generateText,
  generateObject,
  type CoreMessage,
  type LanguageModelV1,
  smoothStream,
} from "ai";
import type { APIRoute } from "astro";
import { z } from "zod";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { withFrictionSystemPrompt } from "@/data/ai/prompts/with-friction";
import { withoutFrictionSystemPrompt } from "@/data/ai/prompts/without-friction";
import { quickRepliesSystemPrompt } from "@/data/ai/prompts/quick-replies";

const messageSchema = z.object({
  role: z.union([
    z.literal("system"),
    z.literal("user"),
    z.literal("assistant"),
    z.literal("tool"),
  ]),
  content: z.string().min(1),
});

const requestSchema = z.object({
  messages: z.array(messageSchema).min(1),
  systemPrompt: z.string().optional(),
  temperature: z.number().min(0).max(2).optional().default(0.7),
  maxTokens: z.number().positive().optional().default(1024),
});

const quickRepliesSchema = z.object({
  replies: z.array(z.string()),
});

async function generateQuickReplies(message: string, model: LanguageModelV1) {
  try {
    const { object } = await generateObject({
      model,
      schema: quickRepliesSchema,
      schemaName: "QuickReplies",
      schemaDescription:
        "Generate 2-4 short, natural follow-up questions or responses that a user might want to ask. Each reply should be 2-6 words long.",
      prompt: `${quickRepliesSystemPrompt}\n\nGenerate quick reply suggestions for this message: "${message}"`,
    });
    return object.replies;
  } catch (e) {
    console.error("Failed to generate quick replies:", e);
    return [];
  }
}

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const body = await request.json();
    const parsed = requestSchema.safeParse(body);

    if (!parsed.success) {
      return new Response(
        JSON.stringify({
          error: "Invalid request data",
          details: parsed.error.issues,
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const { messages, systemPrompt, temperature } = parsed.data;
    const withFriction = locals.runtime.env.WITH_AI_FRICTION === "true";

    // Combine the base system prompt with any user-provided context
    const fullSystemPrompt = `${
      withFriction ? withFrictionSystemPrompt : withoutFrictionSystemPrompt
    }

    
    ${systemPrompt || ""}`;

    const finalMessages = [
      { role: "system", content: fullSystemPrompt },
      ...messages,
    ];

    if (finalMessages.length === 0) {
      return new Response(
        JSON.stringify({
          error: "No messages provided",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // Create Google Gemini instance with API key from runtime
    const google = createGoogleGenerativeAI({
      apiKey: locals.runtime.env.GOOGLE_AI_STUDIO_API_KEY,
    });
    const model = google("gemini-2.0-flash-001", {
      safetySettings: [
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_NONE",
        },
        {
          category: "HARM_CATEGORY_DANGEROUS_CONTENT",
          threshold: "BLOCK_NONE",
        },
        {
          category: "HARM_CATEGORY_HARASSMENT",
          threshold: "BLOCK_NONE",
        },
        {
          category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          threshold: "BLOCK_NONE",
        },
      ],
    }) as LanguageModelV1;

    // Use different methods based on friction mode
    if (withFriction) {
      // Generate the main response
      const { text } = await generateText({
        model,
        messages: finalMessages as CoreMessage[],
        temperature,
      });

      // Generate quick replies for friction mode
      const quickReplies = await generateQuickReplies(text, model);

      console.log("Quick replies:", quickReplies);

      // Return just the text content in the response
      return new Response(text, {
        headers: {
          "Content-Type": "text/plain",
          "X-Quick-Replies": JSON.stringify(quickReplies),
        },
      });
    } else {
      const result = streamText({
        model,
        messages: finalMessages as CoreMessage[],
        temperature,
        experimental_transform: smoothStream({
          delayInMs: 10,
          chunking: "word",
        }),
      });

      // For streaming mode, use the default data stream response
      return result.toDataStreamResponse();
    }
  } catch (error) {
    console.error("AI request failed:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};
