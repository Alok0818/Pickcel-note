
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0wnae07PwXd9v88cDHwLaDoqO0o1Bk_w",
    authDomain: "pickcel-app.firebaseapp.com",
    projectId: "pickcel-app",
    storageBucket: "pickcel-app.appspot.com",
    messagingSenderId: "871799172113",
    appId: "1:871799172113:web:2ac2e5a8b8b130838d95b0",
    measurementId: "G-B6VPEXHZLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);