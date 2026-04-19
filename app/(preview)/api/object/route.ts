import { vacationSchemaObject } from "@/lib/schema";
import { createGateway } from "@ai-sdk/gateway";
import { streamObject } from "ai";
import { checkBotId } from "botid/server";

const gateway = createGateway();

export async function POST() {
  const { isBot } = await checkBotId();
  if (isBot) {
    return new Response("Access denied", { status: 403 });
  }

  const result = await streamObject({
    schema: vacationSchemaObject,
    output: "object",
    model: gateway("openai/gpt-4o-mini"),
    prompt: "Generate 3 vacation destinations",
  });

  return result.toTextStreamResponse();
}
