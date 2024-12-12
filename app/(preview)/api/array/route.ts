import { streamObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { vacationSchema } from "@/lib/schema";

export async function POST() {
  const result = streamObject({
    schema: vacationSchema,
    output: "array",
    model: openai("gpt-4o-mini"),
    prompt: "Generate 3 vacation destinations",
  });

  return result.toTextStreamResponse();
}
