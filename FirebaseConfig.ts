// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDedKd-eIy3kF5_7s53OGK1Felr2LqFnJc",
//   authDomain: "swiftdeck-cef8f.firebaseapp.com",
//   projectId: "swiftdeck-cef8f",
//   storageBucket: "swiftdeck-cef8f.appspot.com",
//   messagingSenderId: "431791385962",
//   appId: "1:431791385962:web:233fbbb8e9e510af34c913"
// };

// // Initialize Firebase
// export const fb_app = initializeApp(firebaseConfig);
// export const fb_auth = getAuth(fb_app);

import firebase from '@react-native-firebase/app'
import '@react-native-firebase/auth'
import '@react-native-firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDedKd-eIy3kF5_7s53OGK1Felr2LqFnJc",
  authDomain: "swiftdeck-cef8f.firebaseapp.com",
  projectId: "swiftdeck-cef8f",
  storageBucket: "swiftdeck-cef8f.appspot.com",
  messagingSenderId: "431791385962",
  appId: "1:431791385962:web:233fbbb8e9e510af34c913"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export {firebase}