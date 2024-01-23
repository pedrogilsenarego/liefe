import { z } from "zod";

export const EditSettingsSchema = z.object({
  taxControlActive: z.boolean(),
  taxCountry: z.string(),
});

export type EditSettingsSchemaType = z.infer<typeof EditSettingsSchema>;
