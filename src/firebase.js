import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgow7jKe0TgVl-FnGLeBAx_kRIjfHtE-o",
  authDomain: "piw-react-789e5.firebaseapp.com",
  databaseURL: "https://piw-react-789e5-default-rtdb.firebaseio.com",
  projectId: "piw-react-789e5",
  storageBucket: "piw-react-789e5.firebasestorage.app",
  messagingSenderId: "849556985592",
  appId: "1:849556985592:web:1f68e796a6209c3623cd0d"
};



const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const realtimedb = getDatabase(app);