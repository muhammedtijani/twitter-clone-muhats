// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALjeHeX2V9LUoocURpO7jRjDMDhFhsKYQ",
  authDomain: "twitter-clone-muhats.firebaseapp.com",
  projectId: "twitter-clone-muhats",
  storageBucket: "twitter-clone-muhats.appspot.com",
  messagingSenderId: "446263107536",
  appId: "1:446263107536:web:de4fd640b6c05cc632e3d5",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
