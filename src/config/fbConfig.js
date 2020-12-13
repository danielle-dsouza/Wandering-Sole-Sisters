import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "sole-sisters.firebaseapp.com",
  projectId: "sole-sisters",
  storageBucket: "sole-sisters.appspot.com",
  messagingSenderId: "761209958308",
  appId: "1:761209958308:web:49cb9858905a8900ae5b31",
  measurementId: "G-JYNSSJEJVZ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;