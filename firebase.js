import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCdiSydT2rCswxgc3PqD7loi1WqREflfcw",
  authDomain: "uber-react-native-clone-9b8d4.firebaseapp.com",
  projectId: "uber-react-native-clone-9b8d4",
  storageBucket: "uber-react-native-clone-9b8d4.appspot.com",
  messagingSenderId: "131266772940",
  appId: "1:131266772940:web:4cc9d6f5c30141e4c56769"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}