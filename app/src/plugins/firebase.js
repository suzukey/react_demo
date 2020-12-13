import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBqeDrFq3_T8v8S1KD03oxIAyjk4ELtQjQ",
  authDomain: "react-demo-92fe3.firebaseapp.com",
  projectId: "react-demo-92fe3",
  storageBucket: "react-demo-92fe3.appspot.com",
  messagingSenderId: "913223206764",
  appId: "1:913223206764:web:6cea35cb1962cce65a5549"
};
// Appの初期化
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore;
export const db = firebase.firestore();
