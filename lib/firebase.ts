import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD01KbIfkKsEMI-b-MMm6FYUZmN2K7QEHE",
  authDomain: "help-burger-basket-d440f.firebaseapp.com",
  projectId: "help-burger-basket-d440f",
  storageBucket: "help-burger-basket-d440f.firebasestorage.app",
  messagingSenderId: "284176066543",
  appId: "1:284176066543:web:2b9a3b5446601b24d7f81a",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
