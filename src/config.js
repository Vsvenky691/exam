// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe3ZifCghEXKQfkac_uiLOP1w9Qhfe0mE",
  authDomain: "exam-be07e.firebaseapp.com",
  projectId: "exam-be07e",
  storageBucket: "exam-be07e.appspot.com",
  messagingSenderId: "513528038421",
  appId: "1:513528038421:web:8aaa3cf1f6f1a6ad117a1c",
  measurementId: "G-EBYJKCR6M0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;