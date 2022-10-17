import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "painel-896de.firebaseapp.com",
    projectId: "painel-896de",
    storageBucket: "painel-896de.appspot.com",
    messagingSenderId: "170676922506",
    appId: "1:170676922506:web:1b13b5df4c4ad70b62a573",
    measurementId: "G-C7VT55J0YE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);
export const auth = getAuth()