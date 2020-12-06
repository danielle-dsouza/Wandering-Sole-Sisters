import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBo19iWEJZcMS4xSo1ZfOeehx6dkzOlBo8",
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