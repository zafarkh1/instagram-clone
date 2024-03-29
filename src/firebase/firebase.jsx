import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBV6IM6KEPACiaMkBSHfoHuupU7BhROnw8",
  authDomain: "instagram-5a10c.firebaseapp.com",
  projectId: "instagram-5a10c",
  storageBucket: "instagram-5a10c.appspot.com",
  messagingSenderId: "799308583028",
  appId: "1:799308583028:web:d79b8d8da9b54c7a2bc121",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };