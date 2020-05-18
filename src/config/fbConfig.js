import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAPHaBIV1LJRt6EJe_CrPmZN67XTXkD7Yk",
    authDomain: "project-manager-e35e0.firebaseapp.com",
    databaseURL: "https://project-manager-e35e0.firebaseio.com",
    projectId: "project-manager-e35e0",
    storageBucket: "project-manager-e35e0.appspot.com",
    messagingSenderId: "464736847507",
    appId: "1:464736847507:web:28971503c98745f6126f66",
    measurementId: "G-52MR5C32KP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;