import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCaHoev9SS07-M5EoKE-E3xVxfHCS2Qz64",
  authDomain: "th-grade-tracker.firebaseapp.com",
  projectId: "th-grade-tracker",
  storageBucket: "th-grade-tracker.firebasestorage.app",
  messagingSenderId: "728386315853",
  appId: "1:728386315853:web:738bc67430ccbae0e69e04",
  measurementId: "G-DCC5HDDH6J"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
