import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCOXPyuh94h40abz1OHq6Nrk_AkbLrZBw8",
  authDomain: "twitter-clone-17fb8.firebaseapp.com",
  projectId: "twitter-clone-17fb8",
  storageBucket: "twitter-clone-17fb8.appspot.com",
  messagingSenderId: "850863140363",
  appId: "1:850863140363:web:ea43915ddf64f4fb4c610e",
  measurementId: "G-WSEPW5756N",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
