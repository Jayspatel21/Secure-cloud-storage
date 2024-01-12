import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCRBNPQ-JX_e3t4SoHAr5R-VqmxjtV9XQw",
  authDomain: "cloud-storage-ea4a6.firebaseapp.com",
  projectId: "cloud-storage-ea4a6",
  storageBucket: "cloud-storage-ea4a6.appspot.com",
  messagingSenderId: "219290622483",
  appId: "1:219290622483:web:b5d2dacf39b7641eb23de6",
  measurementId: "G-1BQFP2B5ZJ"
};

// INITIALISE FIREBASE INSTANCES
export const app = firebase.initializeApp(firebaseConfig);
// if (!firebase.apps.length) {
//   const app = firebase.initializeApp(firebaseConfig);
// } else {
//   const app = firebase.app();
// }
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// FIREBASE AUTH METHODS
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithRedirect(provider);
