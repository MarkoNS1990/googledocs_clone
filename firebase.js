import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDr0Ye8oLQrfwIAjunh5IajcuBMdCBOwNY",
  authDomain: "docs-5b136.firebaseapp.com",
  projectId: "docs-5b136",
  storageBucket: "docs-5b136.appspot.com",
  messagingSenderId: "803307113960",
  appId: "1:803307113960:web:5c6ca674f05bd1ea62685d",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
