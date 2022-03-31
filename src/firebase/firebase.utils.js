import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDdrSdbWjfSrabxhxTNRv1ZLtgTMUDIMNE",
  authDomain: "ecom-react-tutor.firebaseapp.com",
  projectId: "ecom-react-tutor",
  storageBucket: "ecom-react-tutor.appspot.com",
  messagingSenderId: "981661004284",
  appId: "1:981661004284:web:2b7805b08de1dd2b4e0279",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
