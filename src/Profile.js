import './TWP.css';
import {
  buttonGoToChangePassword,
  buttonSignOut,
} from './ui'
import {initializeApp} from 'firebase/app';
import {signOut} from 'firebase/auth';
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCQ1As5zCwlIDx_iU3S2-zK8Fy-O-DvVVc",
    authDomain: "the-write-place-ea1e8.firebaseapp.com",
    projectId: "the-write-place-ea1e8",
    storageBucket: "the-write-place-ea1e8.appspot.com",
    messagingSenderId: "144537031501",
    appId: "1:144537031501:web:381f1b2964a4e95c049d04",
    measurementId: "G-RFS3FW3HTE"
})

const Sign_Out = async () => {
    signOut(auth).then(() => {
    location.assign("https://thefluffynebula.github.io/The-Write-Place-Web-v1/dist/index");
    console.log('SignOut:success');
    }).catch((error) => {
    console.log('SignOut:failure');
    });

}

const gotoChangePassword = async () => {
    location.assign("https://thefluffynebula.github.io/The-Write-Place-Web-v1/dist/ChangePassword");
  }
buttonSignOut.addEventListener("click",Sign_Out);
buttonGoToChangePassword.addEventListener("click",gotoChangePassword);
const auth = getAuth(firebaseApp);