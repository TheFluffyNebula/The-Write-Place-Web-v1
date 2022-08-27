import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCQ1As5zCwlIDx_iU3S2-zK8Fy-O-DvVVc",
    authDomain: "the-write-place-ea1e8.firebaseapp.com",
    projectId: "the-write-place-ea1e8",
    storageBucket: "the-write-place-ea1e8.appspot.com",
    messagingSenderId: "144537031501",
    appId: "1:144537031501:web:381f1b2964a4e95c049d04",
    measurementId: "G-RFS3FW3HTE"
})
//Variables
SignIn = document.getElementById("buttonSignIn");
SignIn.addEventListener("click",onClickSignIn);
Register = document.getElementById("buttonRegister");
Register.addEventListener("click",onClickRegister);
ResetPassword = document.getElementById("buttonResetPassword");
ResetPassword.addEventListener("click",onClickResetPassword);
editEmail = document.getElementById("editEmail");
editUsername = document.getElementById("editUsername");
editPassword = document.getElementById("editPassword");
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

function onClickSignIn(){
  email = editEmail.value;
  password = editPassword.value;
  signInWithEmailAndPassword(email, password);
}
function onClickRegister(){
  email = editEmail.value;
  username = editUsername.value;
  password = editPassword.value;
  createUserWithEmailAndPassword(email, password);
}
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    location.replace("https://thefluffynebula.github.io/The-Write-Place-Web-v1/Profile");
  })
  .catch((error) => {
    const er\Login.htmlrorCode = error.code;
    const errorMessage = error.message;
  });
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    location.replace("https://thefluffynebula.github.io/The-Write-Place-Web-v1/Profile");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });