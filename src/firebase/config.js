// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAYNY39U_iHS4yyUVaOcVd1dAFZZeDCahs",

  authDomain: "resume-builder-a1754.firebaseapp.com",

  projectId: "resume-builder-a1754",

  storageBucket: "resume-builder-a1754.firebasestorage.app",

  messagingSenderId: "263139842678",

  appId: "1:263139842678:web:d30f0f3a327bec01b0dd57",

  measurementId: "G-2MYV9T1F6Z"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);

export default app;