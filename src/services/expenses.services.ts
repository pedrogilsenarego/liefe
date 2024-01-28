import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/utils";
import { Expenses } from "../types/expenses";
import { DB } from "./constants";

export const expensesServices = {
  addNewExpense: async ({ data }: { data: Expenses }) => {
    try {
      // Step 1: Create a new expense document in the 'expenses' collection
      const expensesCollectionRef = collection(db, DB.EXPENSES);
      const expenseDocRef = await addDoc(expensesCollectionRef, data);

      // Get the document ID of the newly created expense document
      const expenseDocId = expenseDocRef.id;

      // Step 2: Get the business document reference using the business ID
      const businessCollectionRef = collection(db, DB.BUSINESS);
      const businessDocRef = doc(businessCollectionRef, data.businessId);

      // Step 3: Update the expenses array in the 'business' document
      await updateDoc(businessDocRef, {
        expenses: arrayUnion(expenseDocId),
      });

      console.log(`Expense added for business with ID: ${data.businessId}`);

      // Return the ID of the newly created expense document
      return expenseDocId;
    } catch (error) {
      console.error("Error adding expense:", error);
      throw error;
    }
  },
};
