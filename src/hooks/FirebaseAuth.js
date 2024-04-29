// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIJTfwL5aP2rNQeFTeI5MMzJajYSOHvHw",
  authDomain: "coffee-shop-9ab41.firebaseapp.com",
  projectId: "coffee-shop-9ab41",
  storageBucket: "coffee-shop-9ab41.appspot.com",
  messagingSenderId: "263032874626",
  appId: "1:263032874626:web:f03572ad5c0b6c5277369b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
