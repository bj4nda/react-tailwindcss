import {getFirestore} from '@firebase/firestore';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';



const firebaseConfig = {
    apiKey: "AIzaSyDmnOvHK7Is706LpaUs6m62xot8kB-DAVg",
    authDomain: "reactcrud-70485.firebaseapp.com",
    projectId: "reactcrud-70485",
    storageBucket: "reactcrud-70485.appspot.com",
    messagingSenderId: "141221763759",
    appId: "1:141221763759:web:66c1190efebffba4b5525a",
    measurementId: "G-G3RY1FJRC8"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export const db = getFirestore();
  export const auth = app.auth()
  export default app