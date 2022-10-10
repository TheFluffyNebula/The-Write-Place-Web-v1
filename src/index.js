import './TWP.css';
import {
  editEmail,
  editPassword,
  editUsername,
  buttonSignIn,
  buttonRegister,
  generateToast,
} from './ui.js'
import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile,
} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCQ1As5zCwlIDx_iU3S2-zK8Fy-O-DvVVc",
    authDomain: "the-write-place-ea1e8.firebaseapp.com",
    projectId: "the-write-place-ea1e8",
    storageBucket: "the-write-place-ea1e8.appspot.com",
    messagingSenderId: "144537031501",
    appId: "1:144537031501:web:381f1b2964a4e95c049d04",
    measurementId: "G-RFS3FW3HTE"
})
const checkUsername = async () => {
  const username = editUsername.value;
  const docRef = doc(db, "Users", username);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    generateToast({
      message: 'username already exists',
      background: "hsl(350 100% 66.5%)",
      color: "white",
      length: "3000ms",
    })
    console.log("Username already exists");
  } else {
    createAccount();
    //toast for this as well
    console.log("Username is good to go");
  }
}
// Create new account using email/password
const createAccount = async () => {
  const email = editEmail.value;
  const password = editPassword.value;
  const username = editUsername.value;
  try {
    await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      setDoc(doc(db, "Users", username), {
        math: true,
        eng: true,
        hist: true,
        sci: true,
      });
      updateProfile(auth.currentUser, {
        email: email,
        displayName: username,  
      })
      
      location.assign("https://thefluffynebula.github.io/The-Write-Place-Web-v1/dist/Profile");
    });
  }
  catch(error) {
    generateToast({
      message: 'failed to make account',
      background: "hsl(171 100% 46.1%)",
      color: "white",
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
    generateToast({
      message: 'incorrect credentials',
      background: "hsl(350 100% 66.5%)",
      color: "white",
      length: "3000ms",
    })
    console.log('loginEmailPassword:failure');
  }
}

buttonSignIn.addEventListener("click",loginEmailPassword);
buttonRegister.addEventListener("click",checkUsername);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);