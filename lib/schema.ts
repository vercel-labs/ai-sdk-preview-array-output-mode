import { z } from "zod";

export const vacationSchema = z.object({
  location: z.string(),
  country: z.string(),
  climate: z.enum([
    "tropical",
    "arid",
    "temperate",
    "polar",
    "mediterranean",
    "subtropical",
    "alpine",
    "coastal",
    "rainforest",
    "desert",
  ]),
  description: z.string(),
  tags: z.array(z.string()),
  activities: z.array(z.string().describe("max two words")),
});

export const vacationsSchema = z.array(vacationSchema);
export const vacationSchemaObject = z.object({ contacts: vacationsSchema });
