import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/utils";
import { DB } from "./constants";

export const businessServices = {
  addNewBusiness: async ({
    userId,
    businessName,
  }: {
    userId: string;
    businessName: string;
  }) => {
    try {
      // Step 1: Create a new document in the 'business' collection
      const businessCollectionRef = collection(db, DB.BUSINESS);
      const businessDocRef = await addDoc(businessCollectionRef, {
        userId,
        businessName,
      });

      // Get the document ID of the newly created business document
      const businessDocId = businessDocRef.id;

      // Step 2: Update the user document in the 'users' collection
      const userDocRef = doc(db, DB.USERS, userId);

      // Use arrayUnion to add the new businessDocId to the 'business' field
      await updateDoc(userDocRef, {
        business: arrayUnion(businessDocId),
      });

      console.log(
        `Business '${businessName}' added for user with ID: ${userId}`
      );

      // Fetch and return the updated user data after the update
      const updatedUserDoc = await getDoc(userDocRef);
      const updatedUserData = updatedUserDoc.data();

      return { ...updatedUserData, docId: updatedUserDoc.id };
    } catch (error) {
      console.error("Error adding business:", error);
      throw error;
    }
  },
};
