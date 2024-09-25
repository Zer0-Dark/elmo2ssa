// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDHXMtFZJrwtY3OYSj2BZROg0HYGh1FkYA",
    authDomain: "elmo2ssa-f61ec.firebaseapp.com",
    projectId: "elmo2ssa-f61ec",
    storageBucket: "elmo2ssa-f61ec.appspot.com",
    messagingSenderId: "30057198436",
    appId: "1:30057198436:web:4edad6eb7229f4ae29c071",
    measurementId: "G-YJLGWB8VMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);