//import './TWP.css';
import {
  buttonSignOut,
  textUserUsername,
  textUserEmail,
  inputAvatar,
  imagePFP,
} from './ui'
import {initializeApp} from 'firebase/app';
import {getAuth, signOut} from 'firebase/auth';
import { getStorage, ref, uploadBytes ,getDownloadURL} from "firebase/storage";
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

async function displayProfilePicture(){
  const user = auth.currentUser;
  const userid = user.uid;
  const storageRef = ref(storage, "pfps/"+String(userid)+".jpeg");
  getDownloadURL(storageRef).then((url) => {
    // Insert url into an <img> tag to "download"
    imagePFP.innerHTML = "<img src="+String(url)+">"; //todo: update width to appropriate width in css?
  }).catch((error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object-not-found':
        console.log("File doesn't exist");
        break;
      case 'storage/unauthorized':
        console.log("User doesn't have permission to access the object");
        break;
      case 'storage/canceled':
        console.log("User canceled the upload");
        break;
      // ...
      case 'storage/unknown':
        console.log("Unknown error occurred, inspect the server response");
        break;
    }
  });
}

const uploadProfilePictureToStorage = async () => {
  const user = auth.currentUser;
  const userid = user.uid;
  const storageRef = ref(storage, "pfps/"+String(userid)+".jpeg");
  const file = inputAvatar.files[0];
  //console.log(file);
  await uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Uploaded file to storage!');
  });
  displayProfilePicture();
}

const auth = getAuth(firebaseApp);
const storage = getStorage();
buttonSignOut.addEventListener("click",Sign_Out);
addEventListener('change', uploadProfilePictureToStorage);
setTimeout(displayUsernameAndEmail,400);
setTimeout(displayProfilePicture,400);