// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, setDoc } from "firebase/firestore";

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

async function registerUser(email, password, name) {
  // 1. Register with Firebase Auth (handles password securely)
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // 2. Save user profile (no password!) in Firestore
  await setDoc(doc(db, "users", user.uid), {
    name,
    email,
    createdAt: new Date()
  });
}

