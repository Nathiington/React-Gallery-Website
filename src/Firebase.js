import  firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "dummy value",
    authDomain: "dummy value",
    projectId: "dummy value",
    storageBucket: "dummy value",
    messagingSenderId: "dummy value",
    appId: "dummy value",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export {projectStorage, projectFirestore, timestamp};