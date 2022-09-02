import './TWP.css';
import {
  EO1,EO2,EO3,
} from './ui'
import {initializeApp} from 'firebase/app';
import {getAuth, } from 'firebase/auth';
import { getFirestore, getDocs, collection, query, where, limit} from "firebase/firestore"; //updateDoc vs setDoc to not fully replace
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
    var username = user.displayName;
    const docRef = collection(db,"ECG")
    const tagQuery = query(docRef, where("submitter", "!=", username),limit(3));
    const tagQuerySnapshot = await getDocs(tagQuery);
    tagQuerySnapshot.forEach((doc) => {
        var dd = doc.data()
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        console.log(dd.submitter);
        //doc.id is docName
      });
    
}
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
//loadOtherEssays();
setTimeout(loadOtherEssays,500);