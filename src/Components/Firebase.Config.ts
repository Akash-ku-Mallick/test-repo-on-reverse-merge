import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxECY7HA7pApQjL1572MIux6_A52XS9rM",
  authDomain: "akash-portfolio-1.firebaseapp.com",
  projectId: "akash-portfolio-1",
  storageBucket: "akash-portfolio-1.appspot.com",
  messagingSenderId: "563174815866",
  appId: "1:563174815866:web:7b1bbf433c656102dd63c3"
};

// Initialize Firebase
export const FREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FREBASE_APP);
