// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeE-MIibJNePW0uV3iefnWb6kords82q4",
  authDomain: "todo-2bbe0.firebaseapp.com",
  projectId: "todo-2bbe0",
  storageBucket: "todo-2bbe0.firebasestorage.app",
  messagingSenderId: "193498227168",
  appId: "1:193498227168:web:eba562a9ab0108a6598b85",
  measurementId: "G-0M65GMWP9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);