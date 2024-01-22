import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC5Td2NnTnqb7GZFQQiWyBn2inWkFgSgKs",
  authDomain: "liefe-d3349.firebaseapp.com",
  projectId: "liefe-d3349",
  storageBucket: "liefe-d3349.appspot.com",
  messagingSenderId: "256144557567",
  appId: "1:256144557567:web:400f7f656ca135dd6293ca",
  measurementId: "G-8V9K0MHJX5",
};

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
