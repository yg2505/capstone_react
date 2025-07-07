
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyA6Bo9H37eTNse9y2FRcqOYCmzkEydbIOM",
  authDomain: "brightcause-b096a.firebaseapp.com",
  projectId: "brightcause-b096a",
  storageBucket: "brightcause-b096a.firebasestorage.app",
  messagingSenderId: "390931287087",
  appId: "1:390931287087:web:cb338c8c9cc833e2214ada"
};


const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);