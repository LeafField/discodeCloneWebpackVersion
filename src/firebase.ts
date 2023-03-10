import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7lk0psmacMydA_MhOiXyVynZcctwNC2I",
  authDomain: "discode-clone2.firebaseapp.com",
  projectId: "discode-clone2",
  storageBucket: "discode-clone2.appspot.com",
  messagingSenderId: "1076550703192",
  appId: "1:1076550703192:web:4a0bd2770dad44948b522d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };
