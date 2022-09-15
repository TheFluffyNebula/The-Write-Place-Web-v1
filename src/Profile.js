import './TWP.css';
import {
  buttonSignOut,
  textUserUsername,
  textUserEmail,
  avatar,
} from './ui'
import {initializeApp} from 'firebase/app';
import {getAuth, signOut} from 'firebase/auth';
import { getStorage, ref, getDownloadURL} from "firebase/storage";
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

async function displayUsernameAndEmail(){
  const user = auth.currentUser;
  var displayName = user.displayName;
  const email = user.email;
  textUserUsername.innerHTML = "Username:"+String(displayName);
  textUserEmail.innerHTML = "Email:"+String(email);
}

const uploadProfilePictureToStorage = async (event) => {
  const user = auth.currentUser;
  const userid = user.uid;
  const storageRef = ref(storage, 'pfps');
  const fileList = event.files;
  const pfp = fileList[0];
  console.log(pfp);
  //avatar.innerHTML = "<img src="+String(event.target.value)+">";
  //readAsDataURL doesn't work as it returns nothing
  //3rd attempt: URL.createObjectURL()
}

const auth = getAuth(firebaseApp);
const storage = getStorage();
buttonSignOut.addEventListener("click",Sign_Out);
addEventListener('change', uploadProfilePictureToStorage);
setTimeout(displayUsernameAndEmail,400);