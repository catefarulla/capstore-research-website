import { streamText, generateText, type CoreMessage } from "ai";
import type { APIRoute } from "astro";
import { z } from "zod";
import { getCollection, type CollectionEntry } from "astro:content";
import { createAnthropic } from "@ai-sdk/anthropic";

// Define types for our collections
type Product = CollectionEntry<"products">;
type Benefit = CollectionEntry<"benefits">;

// Zod schemas for data validation
const ProductSchema = z.object({
  Name: z.string().optional(),
  Blurb: z.string().optional(),
  Price: z.number().optional(),
  "Has Cellular": z.boolean().optional(),
  "Available Colours": z.array(z.string()).optional(),
  "Available Sizes": z.array(z.string()).optional(),
});

const BenefitSchema = z.object({
  Title: z.string().optional(),
  Description: z.string().optional(),
});

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

// Base system prompt
const COMPANY_INFO = `
Chronos is a premium smartwatch manufacturer focused on delivering high-quality, feature-rich wearables.
Our products combine cutting-edge technology with elegant design, offering:
- Advanced health and fitness tracking
- Premium build quality and materials
- Extensive customization options
- Industry-leading battery life
- Seamless integration with smartphones
`;

// Additional instructions for friction mode
const FRICTION_MODE_INSTRUCTIONS = `
IMPORTANT INSTRUCTIONS FOR YOUR RESPONSES:
1. Keep your responses very concise and to the point
2. Ask investigative questions to understand the user's needs before making recommendations
3. Focus on one aspect at a time
4. Encourage user questions about specific features they care about
5. Keep responses to 2-3 sentences maximum
6. Always end with a question to understand more about their needs
`;

// Standard mode instructions
const STANDARD_MODE_INSTRUCTIONS = `
INSTRUCTIONS FOR YOUR RESPONSES:
1. Be thorough but conversational
2. Feel free to provide detailed explanations
3. You can cover multiple aspects in one response
4. Focus on the features that match their current selection
`;

async function generateFullSystemPrompt(
  userSystemPrompt: string,
  withFriction: boolean,
) {
  // Fetch all product data
  const products = await getCollection("products");
  const benefits = await getCollection("benefits");

  // Create a catalog of all products with their details
  const productCatalog = products
    .filter((product: Product) => product.data !== undefined)
    .map((product: Product) => {
      const validation = ProductSchema.safeParse(product.data);
      if (!validation.success) return "";

      const data = validation.data;
      return `
Product: ${data.Name || "Unnamed Product"}
Price: £${data.Price || 299}
Features: ${data.Blurb || "No description available"}
Has Cellular: ${data["Has Cellular"] ? "Yes" : "No"}
Available Colors: ${(data["Available Colours"] || []).length} options
Available Sizes: ${(data["Available Sizes"] || []).length} options
`;
    })
    .filter(Boolean)
    .join("\n");

  // Create a benefits catalog
  const benefitsCatalog = benefits
    .filter((benefit: Benefit) => benefit.data !== undefined)
    .map((benefit: Benefit) => {
      const validation = BenefitSchema.safeParse(benefit.data);
      if (!validation.success) return "";

      const data = validation.data;
      return `- ${data.Title || "Untitled"}: ${data.Description || "No description"}`;
    })
    .filter(Boolean)
    .join("\n");

  // Combine all information with mode-specific instructions
  return `
${COMPANY_INFO}

PRODUCT CATALOG:
${productCatalog}

AVAILABLE BENEFITS:
${benefitsCatalog}

CURRENT USER CONTEXT:
${userSystemPrompt}

${withFriction ? FRICTION_MODE_INSTRUCTIONS : STANDARD_MODE_INSTRUCTIONS}
`;
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

    // Generate the enhanced system prompt
    const fullSystemPrompt = await generateFullSystemPrompt(
      systemPrompt || "",
      withFriction,
    );

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
