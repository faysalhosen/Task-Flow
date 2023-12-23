// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXo4Tjz7SkA887EOTYDWIAniBeCPzGVmg",
  authDomain: "taskforge-acb1a.firebaseapp.com",
  projectId: "taskforge-acb1a",
  storageBucket: "taskforge-acb1a.appspot.com",
  messagingSenderId: "235444424936",
  appId: "1:235444424936:web:91f965094d5f27b77cb95d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;