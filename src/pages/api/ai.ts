import { z } from 'zod';
import type { APIRoute } from 'astro';

const messageSchema = z.object({
  role: z.enum(['system', 'user', 'assistant']),
  content: z.string().min(1)
});

const requestSchema = z.object({
  messages: z.array(messageSchema).min(1),
  systemPrompt: z.string().optional(),
  temperature: z.number().min(0).max(2).optional().default(0.7),
  maxTokens: z.number().positive().optional().default(1024)
});

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const body = await request.json();
    const parsed = requestSchema.safeParse(body);

    if (!parsed.success) {
      return new Response(JSON.stringify({
        error: 'Invalid request data',
        details: parsed.error.issues
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { messages, systemPrompt, temperature, maxTokens } = parsed.data;
    const finalMessages = systemPrompt 
      ? [{ role: 'system', content: systemPrompt }, ...messages]
      : messages;

    if (finalMessages.length === 0) {
      return new Response(JSON.stringify({
        error: 'No messages provided'
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const ai = locals.runtime.env.AI;
    const response = await ai.run('@cf/meta/llama-2-7b-chat-int8', {
      messages: finalMessages,
      temperature,
      max_tokens: maxTokens
    }) as { response: string };

    if (!response?.response) {
      throw new Error('Invalid AI response');
    }

    return new Response(JSON.stringify({
      response: response.response
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('AI request failed:', error);
    return new Response(JSON.stringify({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}