import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2PtCXCw2bAu9kE087nDl9gdLehd8xfFE",
  authDomain: "kima-style.firebaseapp.com",
  databaseURL: "https://kima-style.firebaseio.com",
  projectId: "kima-style",
  storageBucket: "kima-style.appspot.com",
  messagingSenderId: "865186743859",
  appId: "1:865186743859:web:3759c2e573e91609054546",
  measurementId: "G-4MBLKZGKNN"
};

firebase.initializeApp(firebaseConfig);
