import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-KyspHaQxN2XZVWgqTeM8QPTRurAk9X8",
  authDomain: "maltimart-adca9.firebaseapp.com",
  projectId: "maltimart-adca9",
  storageBucket: "maltimart-adca9.appspot.com",
  messagingSenderId: "1084844359481",
  appId: "1:1084844359481:web:1d8654d3b09ea60d7532e8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =  getFirestore(app);
export const storage = getStorage(app);


export default app;