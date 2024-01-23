import { z } from "zod";

export const EditSettingsSchema = z.object({
  taxControlActive: z.boolean(),
});

export type EditSettingsSchemaType = z.infer<typeof EditSettingsSchema>;
