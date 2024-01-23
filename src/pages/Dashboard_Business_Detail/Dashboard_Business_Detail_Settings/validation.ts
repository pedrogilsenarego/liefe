import { z } from "zod";

export const EditSettingsSchema = z.object({
  taxControlActive: z.boolean(),
  taxCountry: z.string(),
  taxPTIVAActive: z.boolean(),
  taxPTIVAPercentage: z.number(),
  taxPTIRSActive: z.boolean(),
  taxPTIRSPercentage: z.number(),
});

export type EditSettingsSchemaType = z.infer<typeof EditSettingsSchema>;
