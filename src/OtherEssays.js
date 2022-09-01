import './TWP.css';
import {
  
} from './ui'
import {initializeApp} from 'firebase/app';
import {getAuth, } from 'firebase/auth';
import { getFirestore, collection, query, where} from "firebase/firestore"; //updateDoc vs setDoc to not fully replace
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCQ1As5zCwlIDx_iU3S2-zK8Fy-O-DvVVc",
    authDomain: "the-write-place-ea1e8.firebaseapp.com",
    projectId: "the-write-place-ea1e8",
    storageBucket: "the-write-place-ea1e8.appspot.com",
    messagingSenderId: "144537031501",
    appId: "1:144537031501:web:381f1b2964a4e95c049d04",
    measurementId: "G-RFS3FW3HTE"
})
async function loadOtherEssays(){
    const user = auth.currentUser;
    username = user.displayName;
    const citiesRef = collection(db, "ECG");
    const q = query(citiesRef, where("submitter", "!=", username));
    console.log(user);
    console.log(username);
    console.log(citiesRef);
    console.log(q);
}
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
loadOtherEssays();
//setTimeout(loadOtherEssays,3000);