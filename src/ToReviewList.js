import './TWP.css';
import {
  TRL1,TRL2,TRL3,
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
async function loadReviewList(){
    const user = auth.currentUser;
    var username = user.displayName;
    const docRef = collection(db,"ECG")
    const tagQuery = query(docRef, where("reviewer", "==", username),limit(3));
    const tagQuerySnapshot = await getDocs(tagQuery);
    const essays = [TRL1,TRL2,TRL3];
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
  //console.log(str.length);
  //console.log(i)
  //console.log(str.slice(i,str.length));
  var str = event.currentTarget.innerText;
  for(let i = 0; i < str.length; i++){
    if (str.slice(i,i+5)=="https"){
      var OEUrl = str.slice(i,str.length);
      break
    }
  }
  var result = confirm('Would you like to review this essay?');
  if (result==true){  
    window.open(String(OEUrl));
    location.assign("https://thefluffynebula.github.io/The-Write-Place-Web-v1/dist/ToReviewList");
    //set reviewer to currentUser
  }
  if (result==false){
    event.preventDefault();
  }
}
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
//loadOtherEssays();
setTimeout(loadReviewList,500);