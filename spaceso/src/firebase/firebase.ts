import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebaseConfig from "./firebase-config";

const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);

export const db: Firestore = getFirestore(firebaseApp);
export const auth: Auth = getAuth(firebaseApp);

export default firebaseApp;
