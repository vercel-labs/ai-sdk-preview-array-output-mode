import { vacationSchemaObject } from "@/lib/schema";
import { openai } from "@ai-sdk/openai";
import { streamObject } from "ai";

export async function POST() {
  const result = streamObject({
    schema: vacationSchemaObject,
    output: "object",
    model: openai("gpt-4o-mini"),
    prompt: "Generate 3 vacation destinations",
  });

  return result.toTextStreamResponse();
}
