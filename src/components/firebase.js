import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDBX9jUkty8lNOdbF-CL1YjYT57nH9l4iw",
    authDomain: "app-chat-7c5c5.firebaseapp.com",
    databaseURL: "https://app-chat-7c5c5-default-rtdb.firebaseio.com",
    projectId: "app-chat-7c5c5",
    storageBucket: "app-chat-7c5c5.appspot.com",
    messagingSenderId: "5453640522",
    appId: "1:5453640522:web:1b095392956ac6bf9f47b3",
    measurementId: "G-8T0W9WGPKH"
};

const app = initializeApp(firebaseConfig)

export const authentication = getAuth(app)

export const db = getFirestore(app)