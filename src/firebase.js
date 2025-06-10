// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXeaICX44JIOJnLC5FkoT84AaWbd4LFVc",
  authDomain: "you2-project.firebaseapp.com",
  projectId: "you2-project",
  storageBucket: "you2-project.firebasestorage.app",
  messagingSenderId: "464239652329",
  appId: "1:464239652329:web:433e75588f0b0165bd6f78",
  measurementId: "G-71RSRTTS4R",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
