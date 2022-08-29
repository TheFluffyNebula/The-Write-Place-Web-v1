import './TWP.css';
import {
  editSendEmailTo,
  buttonFPSubmit,
} from './ui'
import {initializeApp} from 'firebase/app';
import {getAuth, sendPasswordResetEmail} from 'firebase/auth';
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCQ1As5zCwlIDx_iU3S2-zK8Fy-O-DvVVc",
    authDomain: "the-write-place-ea1e8.firebaseapp.com",
    projectId: "the-write-place-ea1e8",
    storageBucket: "the-write-place-ea1e8.appspot.com",
    messagingSenderId: "144537031501",
    appId: "1:144537031501:web:381f1b2964a4e95c049d04",
    measurementId: "G-RFS3FW3HTE"
})
const passReset = async() => {
    const email = editSendEmailTo.value;
    sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log('passReset:success');
      location.assign("https://thefluffynebula.github.io/The-Write-Place-Web-v1/dist/index");
    })
    .catch((error) => {
      console.log('passReset:failure');
      //Toast.makeToast() but web version
    });
  }
buttonFPSubmit.addEventListener("click",passReset);
const auth = getAuth(firebaseApp);