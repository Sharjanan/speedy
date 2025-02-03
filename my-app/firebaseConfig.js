// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCWqD0zg_mpIfhZ6_zDcAljpn5-yc0A90k",
    authDomain: "speedy-c4155.firebaseapp.com",
    projectId: "speedy-c4155",
    storageBucket: "speedy-c4155.firebasestorage.app",
    messagingSenderId: "383330076272",
    appId: "1:383330076272:web:bad2e99bdb91360e2b56b5",
    measurementId: "G-GTFGN3Q5CS"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
