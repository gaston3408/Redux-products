import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDpAWnEdrgalxGmXtVPJI_nu14DcPUqhFQ",
    authDomain: "app-company-3b969.firebaseapp.com",
    databaseURL: "https://app-company-3b969.firebaseio.com",
    projectId: "app-company-3b969",
    storageBucket: "app-company-3b969.appspot.com",
    messagingSenderId: "43786758146",
    appId: "1:43786758146:web:b78e906a53188fff591f1b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}