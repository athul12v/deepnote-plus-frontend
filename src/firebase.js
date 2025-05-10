// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// const db = getFirestore(app);

const firebaseConfig = {
    apiKey: "AIzaSyA3QvRRu1DDTnuvXcE0l4jy40PWEVp47p4",
    authDomain: "deepnote-plus.firebaseapp.com",
    projectId: "deepnote-plus",
    storageBucket: "deepnote-plus.firebasestorage.app",
    messagingSenderId: "629768551634",
    appId: "1:629768551634:web:d5c98fcd29379e0110810b",
    measurementId: "G-EYMQN503CT"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
