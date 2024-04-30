// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUAg18JrKP3bDDYsUA5eGZdPKFrVF2dlY",
  authDomain: "draw-print-dream.firebaseapp.com",
  projectId: "draw-print-dream",
  storageBucket: "draw-print-dream.appspot.com",
  messagingSenderId: "388247011397",
  appId: "1:388247011397:web:0a8b9b2fd1601ff824232c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
