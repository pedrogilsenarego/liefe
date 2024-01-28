import { BusinessSettings } from "./business";

export type Expenses = {
  userId: string;
  businessId: string;
  category: string;
  amount: string;
  date: Date;
  note: string;
  businessSettings: BusinessSettings;
};
