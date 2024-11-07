// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


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

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const db = getFirestore(app);


export default app;
export { auth };