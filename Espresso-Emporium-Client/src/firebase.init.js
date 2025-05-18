// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs6cIL7gBNb5GKbQArdMXUFFwGgjVkx3o",
  authDomain: "marziul-espresso-emporium.firebaseapp.com",
  projectId: "marziul-espresso-emporium",
  storageBucket: "marziul-espresso-emporium.firebasestorage.app",
  messagingSenderId: "123288884041",
  appId: "1:123288884041:web:87215664585d92b9e30098"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);