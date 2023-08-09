// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//authentication
import { getAuth } from "firebase/auth";
//firebase database
import { getFirestore } from "firebase/firestore";
//firebase storage
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyANrr7-OZyEoNfGieLjbXk9YXjWJLPTnzA",
  authDomain: "makemytravel-8a5df.firebaseapp.com",
  projectId: "makemytravel-8a5df",
  storageBucket: "makemytravel-8a5df.appspot.com",
  messagingSenderId: "62461490778",
  appId: "1:62461490778:web:29b4d2f3406dbb7f4d4a63",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export let auth = getAuth(firebaseApp);
export let db = getFirestore(firebaseApp);
export let storage = getStorage(firebaseApp);

export default firebaseApp;
