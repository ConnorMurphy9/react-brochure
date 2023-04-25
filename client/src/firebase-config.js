import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
require('dotenv').config();
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRhmQ8vJrDHuvYGv5PmcrJMq1A6tZCt1Q",
    authDomain: "auth-brochure-development.firebaseapp.com",
    projectId: "auth-brochure-development",
    storageBucket: "auth-brochure-development.appspot.com",
    messagingSenderId: "356340750342",
    appId: "1:356340750342:web:d23a8448b8c26108f08b87"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);