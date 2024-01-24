import { z } from "zod";

export const AddExpenseSchema = z.object({
  business: z.string(),
  category: z.string(),
});

export type AddExpenseSchemaType = z.infer<typeof AddExpenseSchema>;
