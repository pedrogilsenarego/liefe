import { BusinessSettings } from "../../../../types/business";
import { Expenses } from "../../../../types/expenses";
import { AddExpenseSchemaType } from "./validation";

export const formMapper = (
  data: AddExpenseSchemaType,
  userId: string,
  businessId: string,
  businessSettings: BusinessSettings
): Expenses => {
  return {
    userId,
    businessId,
    category: data.category,
    note: data.note,
    date: data.dateTransaction,
    amount: data.amount,
    businessSettings,
  };
};

export default formMapper;
