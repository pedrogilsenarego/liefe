import {
  QueryDocumentSnapshot,
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase/utils";
import { BusinessData } from "../types/business";
import { Bussiness } from "../types/user";
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
      // Step 1: Check if the business name already exists for the user
      const userDocRef = doc(db, DB.USERS, userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();

        if (
          userData.business &&
          userData.business.some(
            (business: Bussiness) => business.businessName === businessName
          )
        ) {
          // Business with the same name already exists, handle accordingly
          console.log(`Business '${businessName}' already exists for user.`);
          return { ...userData, docId: userDoc.id };
        }
      }

      // Step 2: Create a new document in the 'business' collection
      const businessCollectionRef = collection(db, DB.BUSINESS);
      const businessDocRef = await addDoc(businessCollectionRef, {
        userId,
        businessName,
      });

      // Get the document ID of the newly created business document
      const businessDocId = businessDocRef.id;

      // Step 3: Update the user document in the 'users' collection
      await updateDoc(userDocRef, {
        business: arrayUnion({ businessDocId, businessName }),
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
  getBusiness: async ({
    businessDocId,
    userId,
  }: {
    businessDocId: string;
    userId: string;
  }) => {
    try {
      // Step 1: Get the business document from the 'business' collection
      const businessDocRef = doc(db, DB.BUSINESS, businessDocId);
      const businessDoc = await getDoc(businessDocRef);

      if (businessDoc.exists()) {
        // Step 2: Check if the user has access to this business
        const businessData = businessDoc.data() as BusinessData;
        if (businessData.userId === userId) {
          // User has access, return the business data
          return { ...businessData, docId: businessDoc.id };
        } else {
          // User doesn't have access, throw an error
          throw new Error("User doesn't have access to this business");
        }
      } else {
        // Business document not found, throw an error
        throw new Error("Business document not found");
      }
    } catch (error) {
      console.error("Error getting business:", error);
      throw error;
    }
  },
  getBusinessDocuments: async (businessDocIds: string[]) => {
    try {
      // Create a query to get documents where the ID is in the provided array
      const businessQuery = query(
        collection(db, DB.BUSINESS),
        where("id", "in", businessDocIds)
      );

      // Execute the query and get the documents
      const businessDocsSnapshot = await getDocs(businessQuery);

      // Extract the data from the documents
      const businessDocsData = businessDocsSnapshot.docs.map(
        (doc: QueryDocumentSnapshot) => ({
          id: doc.id,
          ...doc.data(),
        })
      );

      return businessDocsData;
    } catch (error) {
      console.error("Error getting business documents:", error);
      throw error;
    }
  },
};
