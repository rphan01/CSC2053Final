import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
import 'dotenv/config';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDedKd-eIy3kF5_7s53OGK1Felr2LqFnJc",
  authDomain: "swiftdeck-cef8f.firebaseapp.com",
  projectId: "swiftdeck-cef8f",
  storageBucket: "swiftdeck-cef8f.appspot.com",
  messagingSenderId: "431791385962",
  appId: "1:431791385962:web:233fbbb8e9e510af34c913"
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();

