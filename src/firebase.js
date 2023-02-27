// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDO6MeBYECwzAOZx7NSu5X-zZ9woavtVzE",
  authDomain: "todo-app-765c1.firebaseapp.com",
  projectId: "todo-app-765c1",
  storageBucket: "todo-app-765c1.appspot.com",
  messagingSenderId: "35286637518",
  appId: "1:35286637518:web:7e163fca937f4e6d3d699f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)