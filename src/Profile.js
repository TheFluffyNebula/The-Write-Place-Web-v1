import './TWP.css';
import {
  buttonSignOut,
  buttonDisplayProfile,
  textUserUsername,
  textUserEmail,
} from './ui'
import {initializeApp} from 'firebase/app';
import {getAuth, signOut} from 'firebase/auth';
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

function displayUsernameAndEmail(){
  const user = auth.currentUser;
  const displayName = user.displayName;
  const email = user.email;
  textUserUsername.innerHTML = "Username:"+String(displayName);
  textUserEmail.innerHTML = "Email:"+String(email);
}

buttonSignOut.addEventListener("click",Sign_Out);
buttonDisplayProfile.addEventListener("click",displayUsernameAndEmail);
buttonDisplayProfile.click();
const auth = getAuth(firebaseApp);