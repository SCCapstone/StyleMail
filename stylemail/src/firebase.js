import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";

const fireApp = firebase.initializeApp({
  apiKey: "AIzaSyCLs1a1LcEeXEiOAomAG3EodV5Js3LOnAY",
  authDomain: "stylemail-edf5f.firebaseapp.com",
  databaseURL: "https://stylemail-edf5f.firebaseio.com",
  projectId: "stylemail-edf5f",
  storageBucket: "stylemail-edf5f.appspot.com",
  messagingSenderId: "506653836700",
  appId: "1:506653836700:web:df6ec0ecbd671d1ec0b459",
  measurementId: "G-GCEKVYMV44"
})

const db = fireApp.firestore();
const auth = fireApp.auth();

//db.useEmulator('localhost', 8070);

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export { db, auth, googleProvider, firebase };
export default fireApp;