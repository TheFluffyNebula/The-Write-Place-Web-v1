import './TWP.css';
import {
  editSecurePassword,
  editConfirmPassword,
  buttonCPSubmit,
} from './ui'
import {initializeApp} from 'firebase/app';
import {getAuth, updateCurrentUser, updatePassword} from 'firebase/auth';
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCQ1As5zCwlIDx_iU3S2-zK8Fy-O-DvVVc",
    authDomain: "the-write-place-ea1e8.firebaseapp.com",
    projectId: "the-write-place-ea1e8",
    storageBucket: "the-write-place-ea1e8.appspot.com",
    messagingSenderId: "144537031501",
    appId: "1:144537031501:web:381f1b2964a4e95c049d04",
    measurementId: "G-RFS3FW3HTE"
})

const ChangePassword = async() =>{
    const securePassword = editSecurePassword.value;
    const confirmPassword = editConfirmPassword.value;
    if (securePassword==confirmPassword){
      const user = auth.currentUser;
      console.log(auth.currentUser);
        updatePassword(user, confirmPassword).then(() => {
            console.log('ChangePassword:success');
            console.log(user.displayName);
            console.log(user.email);
            //location.assign("https://thefluffynebula.github.io/The-Write-Place-Web-v1/dist/Profile");
          }).catch((error) => {
            console.log('ChangePassword:failure');
          });
    }
    else{
        console.log('ChangePassword:fields do not match');
    }
}

buttonCPSubmit.addEventListener("click",ChangePassword)
const auth = getAuth(firebaseApp);