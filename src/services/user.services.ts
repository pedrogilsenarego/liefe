import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase/utils"; // Import your Firebase Auth and Firestore instances
import { CreateUser, Login } from "../types/user";
import { DB } from "./constants";

export const userServices = {
  createUser: async (newUser: CreateUser) => {
    const { password, confirmPassword, ...userData } = newUser;
    const { email } = newUser;
    const filteredUserData = Object.fromEntries(
      Object.entries(userData).filter(([_, value]) => value !== undefined)
    );
    try {
      // Create a new user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Create a Firestore document with the same ID as user.uid
      const userDocRef = doc(db, DB.USERS, user.uid);

      await setDoc(userDocRef, { ...filteredUserData, role: ["USER"] });

      console.log("Document written with ID: ", user.uid); // Use user.uid as the Firestore document ID
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },
  loginUser: async ({ email, password }: Login) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // Retrieve user data from Firestore
      const userDoc = await getDoc(doc(db, DB.USERS, user.uid));
      if (userDoc.exists()) {
        const userData = { ...userDoc.data(), docId: userDoc.id };
        return { ...user, userData };
      } else {
        return user;
      }
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    }
  },
  editUser: async (payload: {
    documentID: string;
    values: Partial<CreateUser>;
  }) => {
    const { documentID, values } = payload;

    try {
      const docRef = doc(db, DB.USERS, documentID);
      await updateDoc(docRef, values);
      console.log("Document updated with ID: ", documentID);
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  },
  recoverPassword: async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Password reset email sent successfully.");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      throw error;
    }
  },
  addFeatureToUser: async ({
    userId,
    newFeature,
  }: {
    userId: string;
    newFeature: string;
  }) => {
    try {
      // Get the current user document
      const userDocRef = doc(db, DB.USERS, userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();

        // Check if the user already has the new feature
        const hasFeature =
          userData.features && userData.features.includes(newFeature);

        // If the user doesn't have the feature, update the document
        if (!hasFeature) {
          await updateDoc(userDocRef, {
            features: arrayUnion(newFeature),
          });

          console.log(
            `Feature '${newFeature}' added to user with ID: ${userId}`
          );

          // Fetch and return the updated user data after the update
          const updatedUserDoc = await getDoc(userDocRef);
          const updatedUserData = updatedUserDoc.data();

          return { ...updatedUserData, docId: updatedUserDoc.id };
        } else {
          console.log(
            `User with ID: ${userId} already has the feature '${newFeature}'`
          );
          // Return the existing user data
          return { ...userData, docId: userDoc.id };
        }
      } else {
        console.log(`User with ID: ${userId} not found`);
        // Return null if user not found
        return null;
      }
    } catch (error) {
      console.error("Error adding feature to user:", error);
      throw error;
    }
  },
};
