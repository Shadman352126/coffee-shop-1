// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAESmsduQcUWzDjSFpRoutDde92H95Lyns",
  authDomain: "coffee-shop-practice-32a0a.firebaseapp.com",
  projectId: "coffee-shop-practice-32a0a",
  storageBucket: "coffee-shop-practice-32a0a.appspot.com",
  messagingSenderId: "1096065798443",
  appId: "1:1096065798443:web:63414ffa1f6b3d6994756e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
