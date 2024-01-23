import { z } from "zod";

export const EditSettingsSchema = z.object({
  taxControlActive: z.boolean(),
  taxCountry: z.string(),
  taxPTIVAActive: z.boolean(),
  taxPTIVAPercentage: z.string(),
  taxPTIRSActive: z.boolean(),
  taxPTIRSPercentage: z.string(),
});

export type EditSettingsSchemaType = z.infer<typeof EditSettingsSchema>;
