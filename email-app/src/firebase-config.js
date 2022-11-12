import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth, signOut, sendPasswordResetEmail} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo3sNnW0CNVSALxvTXS-YBYwiyxkia3Fs",
  authDomain: "fierbase-auth-097.firebaseapp.com",
  projectId: "fierbase-auth-097",
  storageBucket: "fierbase-auth-097.appspot.com",
  messagingSenderId: "257942852426",
  appId: "1:257942852426:web:0767cdef0b8f7320cd27b3",
  measurementId: "G-66QBLX1ER2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const analytics = getAnalytics(app);
const auth = getAuth()

export const signup=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

export const login=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

export const resetpassword=(email)=>{
    return sendPasswordResetEmail(auth,email)
}

export const logout=(email)=>{
    return signOut(auth)
}
