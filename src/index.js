import './TWP.css';
import {
  editEmail,
  editPassword,
  editUsername,
  buttonSignIn,
  buttonRegister,
  buttonGoToResetPassword,
} from './ui'
import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile,
} from 'firebase/auth';
import {getFirestore, limitToLast} from 'firebase/firestore';
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCQ1As5zCwlIDx_iU3S2-zK8Fy-O-DvVVc",
    authDomain: "the-write-place-ea1e8.firebaseapp.com",
    projectId: "the-write-place-ea1e8",
    storageBucket: "the-write-place-ea1e8.appspot.com",
    messagingSenderId: "144537031501",
    appId: "1:144537031501:web:381f1b2964a4e95c049d04",
    measurementId: "G-RFS3FW3HTE"
})

// Create new account using email/password
const createAccount = async () => {
  const email = editEmail.value;
  const password = editPassword.value;
  const username = editUsername.value;
  try {
    await createUserWithEmailAndPassword(auth, email, password, username)
    .then(() => {
      updateProfile(auth.currentUser, {
        email: email, username: username,
      })
      location.assign("https://thefluffynebula.github.io/The-Write-Place-Web-v1/dist/Profile");
    }).catch((error) => {
      console.log('updateProfile:failure');
    });
  }
  catch(error) {
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

const gotoResetPassword = async () => {
  location.assign("https://thefluffynebula.github.io/The-Write-Place-Web-v1/dist/ForgotPassword");
}




buttonSignIn.addEventListener("click",loginEmailPassword);
buttonRegister.addEventListener("click",createAccount);
buttonGoToResetPassword.addEventListener("click",gotoResetPassword);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);