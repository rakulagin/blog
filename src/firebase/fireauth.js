import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore"

import { firebaseConfig } from "./fbConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app) // база данных 

const auth = getAuth();

// вход по логину
export const signInFB = async ({ email, password }) => {
         
        email = 'guest'
        password = '222222'
    /*    email = 'dima'
        password = '222222'
        email = 'roma'
        password = '111111'
     */
    signInWithEmailAndPassword(auth, email + '@blog.com', password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user.uid);
            checkRole(user.uid)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });
}
// регистрация пользователя
export const createAuthFB = async ({ email, password }) => {
    email = 'guest'
    password = '222222'
    createUserWithEmailAndPassword(auth, email + '@blog.com', password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });
}
// сверка 
export const checkRole = async (uid) => {
    try {
        const docSnap = await getDoc(doc(db, "roles", uid));
        docSnap.exists() ? console.log(docSnap.get('role')) : console.log('guest');
        
    } catch (error) {
        console.log(error);
    }
}