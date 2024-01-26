import { z } from "zod";

export const AddExpenseSchema = z.object({
  dateTransaction: z.any(),
  business: z.string(),
  category: z.string(),
  amount: z.string().refine(
    (value) => {
      const parsedValue = parseFloat(value);
      return !isNaN(parsedValue) && parsedValue > 0;
    },
    {
      message: "Amount must be a valid positive number",
    }
  ),
});

export type AddExpenseSchemaType = z.infer<typeof AddExpenseSchema>;
