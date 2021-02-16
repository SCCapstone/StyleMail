import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCLs1a1LcEeXEiOAomAG3EodV5Js3LOnAY",
  authDomain: "stylemail-edf5f.firebaseapp.com",
  databaseURL: "https://stylemail-edf5f.firebaseio.com",
  projectId: "stylemail-edf5f",
  storageBucket: "stylemail-edf5f.appspot.com",
  messagingSenderId: "506653836700",
  appId: "1:506653836700:web:b0a2808623db1a3fc0b459",
  measurementId: "G-F80D8NFME2"
})

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email } = user;
    try {
      await userRef.set({
        email,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default app