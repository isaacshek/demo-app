import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { products } from '@/src/data/products';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const model = new ChatGoogleGenerativeAI({
    model: 'gemini-3.5-flash',
    apiKey: process.env.GOOGLE_API_KEY,
  });

  const stream = await model.stream([
    {
      role: 'system',
      content:
        'You are a helpful shopping assistant. Only recommend products from this catalog. ' +
        'If nothing fits, say so.\n\nCatalog:\n' +
        JSON.stringify(products),
    },
    ...messages,
  ]);

  const encoder = new TextEncoder();
  return new Response(
    new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          controller.enqueue(encoder.encode(chunk.text));
        }
        controller.close();
      },
    }),
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    }
  );
}
