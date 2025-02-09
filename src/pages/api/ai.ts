import { streamText, generateText, type CoreMessage } from "ai";
import type { APIRoute } from "astro";
import { z } from "zod";
import { createAnthropic } from "@ai-sdk/anthropic";
import { withFrictionSystemPrompt } from "@/data/ai/prompts/with-friction";
import { withoutFrictionSystemPrompt } from "@/data/ai/prompts/without-friction";

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

    // Create Anthropic instance with API key from runtime
    const anthropicClient = createAnthropic({
      apiKey: locals.runtime.env.ANTHROPIC_API_KEY,
    });
    const model = anthropicClient("claude-3-5-haiku-latest");

    // Use different methods based on friction mode
    if (withFriction) {
      const { text } = await generateText({
        model,
        messages: finalMessages as CoreMessage[],
        temperature,
      });

      // Return just the text content for text protocol
      return new Response(text, {
        headers: {
          "Content-Type": "text/plain",
        },
      });
    } else {
      const result = streamText({
        model,
        messages: finalMessages as CoreMessage[],
        temperature,
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
