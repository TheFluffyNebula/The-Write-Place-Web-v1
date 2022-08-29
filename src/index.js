import './TWP.css';
import {
  editEmail,
  editPassword,
  editUsername,
  editSendEmailTo,
  buttonSignIn,
  buttonRegister,
  buttonResetPassword,
  buttonSubmit,
} from './ui'
import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile,
  sendPasswordResetEmail} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
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
  const email = editEmail.value
  const password = editPassword.value
  const username = editUsername.value
  try {
    await createUserWithEmailAndPassword(auth, email, password)
    updateProfile(auth.currentUser, {
      displayName: username
    }).then(() => {
      // Profile updated!
      location.assign("https://thefluffynebula.github.io/The-Write-Place-Web-v1/src/Profile");
    }).catch((error) => {
      //Toast.makeToast but web version
      console.log('updateProfile:failure');
    });
  }
  catch(error) {
    console.log(`createUsernameWithEmailAndPassword:failure`);
    //Toast.makeToast() but web version
  } 
}

// Login using email/password
const loginEmailPassword = async () => {
  const loginEmail = editEmail.value;
  const loginPassword = editPassword.value;
  try {
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    location.assign("https://thefluffynebula.github.io/The-Write-Place-Web-v1/src/Profile");
  }
  catch(error) {
    console.log('loginEmailPassword:failure');
    //Toast.makeToast() but web version
  }
}

const ResetPassword = async () => {
  location.assign("https://thefluffynebula.github.io/The-Write-Place-Web-v1/src/ForgotPassword");
}

const passReset = async() => {
  const email = editSendEmailTo.value;
  sendPasswordResetEmail(auth, email)
  .then(() => {
    location.assign("https://thefluffynebula.github.io/The-Write-Place-Web-v1/src/Login");
  })
  .catch((error) => {
    console.log('passReset:failure');
    //Toast.makeToast() but web version
  });
}


buttonSignIn.addEventListener("click",loginEmailPassword);
buttonRegister.addEventListener("click",createAccount);
buttonResetPassword.addEventListener("click",ResetPassword);
// buttonSubmit.addEventListener("click",passReset);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);