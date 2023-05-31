import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB4wMZkMmHzIEcoBkEajAiDR5NcKAFdNp8",
  authDomain: "test-website-b8b2c.firebaseapp.com",
  projectId: "test-website-b8b2c",
  storageBucket: "test-website-b8b2c.appspot.com",
  messagingSenderId: "38818888534",
  appId: "1:38818888534:web:af4bbe027874faf0f9b4f7",
  measurementId: "G-650HCND3KV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)