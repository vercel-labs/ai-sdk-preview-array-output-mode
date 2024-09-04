import { vacationSchema } from "@/lib/schema";
import { openai } from "@ai-sdk/openai";
import { streamObject } from "ai";

export async function POST() {
  const result = await streamObject({
    schema: vacationSchema,
    output: "array",
    model: openai("gpt-4o-mini"),
    prompt: "Generate 8 vacation destinations",
  });

  return result.toTextStreamResponse();
}
