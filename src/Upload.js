import './TWP.css';
import {
    editUploadDocumentName,
    editUploadDocumentUrl,
    buttonUploadDocument,
} from './ui'
import {initializeApp} from 'firebase/app';
//import {getAuth, signOut} from 'firebase/auth';
import { getFirestore, doc, setDoc } from "firebase/firestore";
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCQ1As5zCwlIDx_iU3S2-zK8Fy-O-DvVVc",
    authDomain: "the-write-place-ea1e8.firebaseapp.com",
    projectId: "the-write-place-ea1e8",
    storageBucket: "the-write-place-ea1e8.appspot.com",
    messagingSenderId: "144537031501",
    appId: "1:144537031501:web:381f1b2964a4e95c049d04",
    measurementId: "G-RFS3FW3HTE"
})
const createDocument = async () => {
    documentName = editUploadDocumentName.value;
    documentUrl = editUploadDocumentUrl.value;
    await setDoc(doc(db, "ECG", documentName), {
        url: documentUrl,
      });

}
buttonUploadDocument.addEventListener("click",createDocument);
const db = getFirestore(app);