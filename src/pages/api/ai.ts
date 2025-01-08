import { streamText, type CoreMessage } from "ai";
import type { APIRoute } from "astro";
import { z } from "zod";
import { createWorkersAI } from "workers-ai-provider";
import { getCollection, type CollectionEntry } from "astro:content";

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

// Company information - we can move this to a config file later
const COMPANY_INFO = `
Chronos is a premium smartwatch manufacturer focused on delivering high-quality, feature-rich wearables.
Our products combine cutting-edge technology with elegant design, offering:
- Advanced health and fitness tracking
- Premium build quality and materials
- Extensive customization options
- Industry-leading battery life
- Seamless integration with smartphones
`;

async function generateFullSystemPrompt(userSystemPrompt: string) {
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

  // Combine all information
  return `
${COMPANY_INFO}

PRODUCT CATALOG:
${productCatalog}

AVAILABLE BENEFITS:
${benefitsCatalog}

CURRENT USER CONTEXT:
${userSystemPrompt}

Instructions for AI Advisor:
1. You are a knowledgeable product advisor for Chronos.
2. Use the product catalog to make informed comparisons and recommendations.
3. Consider the user's current product selection when making suggestions.
4. Be honest about trade-offs between different models.
5. Focus on features that match the user's implied needs.
6. You can reference specific benefits and features from the catalogs above.
7. Always maintain a helpful and professional tone.
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

    const { messages, systemPrompt, temperature, maxTokens } = parsed.data;

    // Generate the enhanced system prompt
    const fullSystemPrompt = await generateFullSystemPrompt(systemPrompt || "");

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

    const workersai = createWorkersAI({ binding: locals.runtime.env.AI });
    const model = workersai("@cf/meta/llama-3.3-70b-instruct-fp8-fast");
    const result = streamText({
      model,
      messages: finalMessages as CoreMessage[],
      temperature,
      maxTokens,
    });

    return result.toDataStreamResponse();
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
