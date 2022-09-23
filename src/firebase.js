import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkA8DxPM1O4pq145Jseqaw4k594EMHABM",
  authDomain: "fir-e0c50.firebaseapp.com",
  projectId: "fir-e0c50",
  storageBucket: "fir-e0c50.appspot.com",
  messagingSenderId: "13844523054",
  appId: "1:13844523054:web:75ce6700e02eb73f3917bf",
  measurementId: "G-K1GDQYHF0R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

// lets us use the database outside of this file
export { db, auth };
