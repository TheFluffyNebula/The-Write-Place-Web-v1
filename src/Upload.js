import './TWP.css';
import {
    editUploadDocumentName,
    editUploadDocumentUrl,
    buttonUploadDocument,
    generateToast,
    editUploadSelect,

} from './ui'
import {initializeApp} from 'firebase/app';
import {getAuth, } from 'firebase/auth';
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
    var now = new Date();
    const user = auth.currentUser;
    const displayName = user.displayName;
    const documentName = editUploadDocumentName.value;
    const documentUrl = editUploadDocumentUrl.value;
    const documentTag = editUploadSelect.options[editUploadSelect.selectedIndex].value;
    await setDoc(doc(db, "ECG", documentName), {
        complete: false,
        date: now,
        reviewer: null,
        submitter: displayName,
        url: documentUrl,
        tag: documentTag,

      });
      generateToast({
        message: 'document received!',
        background: "hsl(171 100% 46.1%)",
        color: "white",
        length: "3000ms",
      })
}
buttonUploadDocument.addEventListener("click",createDocument);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);