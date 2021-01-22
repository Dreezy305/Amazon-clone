import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDlD1qjMp9zG6mA-7QvhpBjQTA7MkENqPw",
  authDomain: "my-first-project-16902.firebaseapp.com",
  projectId: "my-first-project-16902",
  storageBucket: "my-first-project-16902.appspot.com",
  messagingSenderId: "323683638694",
  appId: "1:323683638694:web:e09cac1693afafa7b08367",
  measurementId: "G-12STV4HDB3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
