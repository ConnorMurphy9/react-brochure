import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
require('dotenv').config();
// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);