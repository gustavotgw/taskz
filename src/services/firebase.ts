import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPbnOC7zQh7sU6lslEnMGP895l2saxkLo",
  authDomain: "taskz-1afc5.firebaseapp.com",
  projectId: "taskz-1afc5",
  storageBucket: "taskz-1afc5.firebasestorage.app",
  messagingSenderId: "262607624579",
  appId: "1:262607624579:web:34acc01b8f0530adbb3eb6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);