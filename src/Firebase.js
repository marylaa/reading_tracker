import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,} from "firebase/auth";
import {getFirestore, addDoc, collection} from "firebase/firestore";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";

const firebaseConfig = {
    apiKey: "AIzaSyBjeAltkyOnzf4zWSOoV3zyumtVzKTnZ2Q",
    authDomain: "reading-website-91bd1.firebaseapp.com",
    projectId: "reading-website-91bd1",
    storageBucket: "reading-website-91bd1.appspot.com",
    messagingSenderId: "996200607349",
    appId: "1:996200607349:web:e47b63ca8fb6eb3f30d23c"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            email: user.email,
        });
        toast.info("Account created!")
        return true
    } catch (error) {
        return {error: error.message}
    }
};


export const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        toast.info("Logged in successfully!")
        return true
    } catch (error) {
        return {error: error.message}
    }
};

export const logOut = async () => {
    try {
        await signOut(auth)
        toast.info("Logged out successfully!")
        return true
    } catch (error) {
        return false
    }
};