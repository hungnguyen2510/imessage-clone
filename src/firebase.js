import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4w8pyAZRlWYk9E0KfBLhMJsg8ymOjerg",
  authDomain: "messenger-clone-ba6e8.firebaseapp.com",
  projectId: "messenger-clone-ba6e8",
  storageBucket: "messenger-clone-ba6e8.appspot.com",
  messagingSenderId: "911247948907",
  appId: "1:911247948907:web:2ba0ee9e8b87853b7b852e",
  measurementId: "G-XD55HSY9EN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
