// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeuSxO1ZqBoXuEjZds4TRv6fZsm3xokLc",
  authDomain: "busybuy-app-b4bae.firebaseapp.com",
  projectId: "busybuy-app-b4bae",
  storageBucket: "busybuy-app-b4bae.firebasestorage.app",
  messagingSenderId: "770544832394",
  appId: "1:770544832394:web:af7774c99eb879c4bf0273",
  measurementId: "G-8TCQ5RXZBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export  const db = getFirestore(app)