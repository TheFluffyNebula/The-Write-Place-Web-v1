import './TWP.css';
import {
  EO1,EO2,EO3,
} from './ui'
import {initializeApp} from 'firebase/app';
import {getAuth, } from 'firebase/auth';
import { getFirestore, getDocs, collection, query, where, limit} from "firebase/firestore"; //updateDoc vs setDoc to not fully replace
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCQ1As5zCwlIDx_iU3S2-zK8Fy-O-DvVVc",
    authDomain: "the-write-place-ea1e8.firebaseapp.com",
    projectId: "the-write-place-ea1e8",
    storageBucket: "the-write-place-ea1e8.appspot.com",
    messagingSenderId: "144537031501",
    appId: "1:144537031501:web:381f1b2964a4e95c049d04",
    measurementId: "G-RFS3FW3HTE"
})
async function loadOtherEssays(){
    const user = auth.currentUser;
    var username = user.displayName;
    const docRef = collection(db,"ECG")
    const tagQuery = query(docRef, where("submitter", "!=", username),limit(3));
    const tagQuerySnapshot = await getDocs(tagQuery);
    const essays = [EO1,EO2,EO3];
    var i = 0
    tagQuerySnapshot.forEach((doc) => {
        var dd = doc.data();
        var element = essays[i];
        element.innerHTML = String(doc.id)+"<br>"+String(dd.submitter)
        +"<br>"+"<span class='dontshow'+id="+String(i)+">"+String(dd.url)+"</span>" //remove id [number] later
        element.addEventListener("click",onClickElement);                           //when it's no longer needed for debugging
        i+=1
        //console.log(doc.id, " => ", doc.data());
        //id is docName, other attributes are their field name in the db
        //dialog into href
      });
}
async function onClickElement(event){
  //console.log(event.currentTarget.innerText);
  var str = event.currentTarget.innerText;
  console.log(str.length);
  for(let i = 0; i < str.length; i++){
    console.log(str[i]);
  }
  // var result = confirm('Would you like to go to profile?');
  // if (result==true){
  //   location.assign("https://thefluffynebula.github.io/The-Write-Place-Web-v1/dist/Profile")
  // }
  // if (result==false){
  //   event.preventDefault();
  // }
}
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
//loadOtherEssays();
setTimeout(loadOtherEssays,500);