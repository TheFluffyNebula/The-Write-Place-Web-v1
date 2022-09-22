import './TWP.css';
import {
  editEmail,
  editPassword,
  editUsername,
  buttonSignIn,
  buttonRegister,
} from './ui'
import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile,
} from 'firebase/auth';
import {getFirestore,} from 'firebase/firestore';
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCQ1As5zCwlIDx_iU3S2-zK8Fy-O-DvVVc",
    authDomain: "the-write-place-ea1e8.firebaseapp.com",
    projectId: "the-write-place-ea1e8",
    storageBucket: "the-write-place-ea1e8.appspot.com",
    messagingSenderId: "144537031501",
    appId: "1:144537031501:web:381f1b2964a4e95c049d04",
    measurementId: "G-RFS3FW3HTE"
})
//toast
let toastContainer;
function generateToast({
  message,
  background = '#00214d',
  color = 'fffffe',
  length = '3000ms',
}){
  toastContainer.insertAdjacentHTML('beforeend','<p class="toast" style="background-color: ${background};  color: ${color} animation-duration: ${length}>  ${message}</p>')
  const toast = toastContainer.lastElementChild;
  toast.addEventListener('animationend',() => toast.remove())
}
function initToast(){//I never use this?
  document.body.insertAdjacentHTML('afterbegin','<div class="toast-container"></div>');
  toastContainer = document.querySelector('.toast-container');
}
// Create new account using email/password
const createAccount = async () => {
  const email = editEmail.value;
  const password = editPassword.value;
  const username = editUsername.value;
  try {
    await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      updateProfile(auth.currentUser, {
        email: email, displayName: username,
      })
      location.assign("https://thefluffynebula.github.io/The-Write-Place-Web-v1/dist/Profile");
    }).catch((error) => {
      generateToast({
        message: 'failed to create account',
        background: "hsl(171 100% 46.1%)",
        color: "hsl(171 100% 46.1%)",
        length: "3000ms",
      })
      console.log('updateProfile:failure');
    });
  }
  catch(error) {
    generateToast({
      message: 'failed to create account',
      background: "hsl(171 100% 46.1%)",
      color: "hsl(171 100% 46.1%)",
      length: "3000ms",
    })
    console.log(`createAccount:failure`);
  } 
}

// Login using email/password
const loginEmailPassword = async () => {
  const loginEmail = editEmail.value;
  const loginPassword = editPassword.value;
  try {
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    location.assign("https://thefluffynebula.github.io/The-Write-Place-Web-v1/dist/Profile");
  }
  catch(error) {
    console.log('loginEmailPassword:failure');
    
  }
}

buttonSignIn.addEventListener("click",loginEmailPassword);
buttonRegister.addEventListener("click",createAccount);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);