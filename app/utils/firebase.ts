// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOw5HozSeIFFXL-Pp6ZD07tfsSHdJ5VA0",
  authDomain: "defender-684c0.firebaseapp.com",
  projectId: "defender-684c0",
  storageBucket: "defender-684c0.appspot.com",
  messagingSenderId: "912035314707",
  appId: "1:912035314707:web:0b67870178c25dba82d3e6",
  measurementId: "G-9LVTM6K4KQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);