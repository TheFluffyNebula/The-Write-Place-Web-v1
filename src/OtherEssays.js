import './TWP.css';
import {
  EO1,EO2,EO3,
  EO1Url,EO2Url,EO3Url
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
    const essaysurl = [EO1Url,EO2Url,EO3Url];
    var i = 0
    tagQuerySnapshot.forEach((doc) => {
        var dd = doc.data();
        var element = essays[i];
        var elementurl = essaysurl[i];
        element.innerHTML = String(doc.id)+"<br>"+String(dd.submitter) //dialog into href
        elementurl.innerHTML = "<a href = {dd.url}></a>";
        element.addEventListener("click",onClickElement);
        i+=1
        //console.log(doc.id, " => ", doc.data());
        //id is docName, other attributes are their field name in the db
      });
}
async function onClickElement(event){
  console.log(event.currentTarget);
  
}
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
//loadOtherEssays();
setTimeout(loadOtherEssays,500);