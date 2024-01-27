import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyChdnfrBxFwlnVwOVUUnA98f1rNGj1Afcw",
  authDomain: "akash-my-portfolio.firebaseapp.com",
  projectId: "akash-my-portfolio",
  storageBucket: "akash-my-portfolio.appspot.com",
  messagingSenderId: "782557530744",
  appId: "1:782557530744:web:b3b62c2cb3ea2d6f0f7b8d",
  measurementId:  "G-4CJSCGL9K3"
};


// Initialize Firebase
const FREBASE_APP = initializeApp(firebaseConfig);
const analytics = getAnalytics(FREBASE_APP);
const db = getFirestore(FREBASE_APP);


export { db, FREBASE_APP };