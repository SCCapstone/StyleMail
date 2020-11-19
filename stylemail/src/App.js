//import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

firebase.initializeApp({
  apiKey: "AIzaSyCLs1a1LcEeXEiOAomAG3EodV5Js3LOnAY",
  authDomain: "stylemail-edf5f.firebaseapp.com",
  databaseURL: "https://stylemail-edf5f.firebaseio.com",
  projectId: "stylemail-edf5f",
  storageBucket: "stylemail-edf5f.appspot.com",
  messagingSenderId: "506653836700",
  appId: "1:506653836700:web:b0a2808623db1a3fc0b459",
  measurementId: "G-F80D8NFME2"

})

const auth = firebase.auth();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>Test login</h1>
        <SignOut />
      </header>

      <section>
        {user ? <Test/> : <SignIn />}
      </section>

    </div>
  );
}

// Get elements
  // Grab email entry element
  // Grab password entry element
  // Grab login button element
  // Grab signup button element
  // Grab logout button element

/* Add login (regular email & pass) event
btnLogin.addEventListener('click', e => {
  const email = // email txt
  const pass = // pass txt
  const promise = auth.signInWithEmailAndPassword(//email txt, pass txt);
  promise.catch(e => console.log(e.message));
});
*/

/* Add signup event
btnSignUp.addEventListener('click', e => {
  //TODO check if email is valid
  const email = // email txt
  const pass = // pass txt
  const promise = auth.createUserWithEmailAndPassword(//email txt, pass txt);
  promise.catch(e => console.log(e.message));
});
*/

/* Add logout event
btnLogout.addEventListener('click', e => {
  firebase.auth().signout();
});
*/

// Add realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser); // show popup to user
  }
  else {
    console.log('not logged in') // show popup to user
  }
});


function SignIn() {

  const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider);
  }

  const signInWithFacebook = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(facebookProvider);
  }

  const signInWithTwitter = () => {
    const twitterProvider = new firebase.auth.TwitterAuthProvider();
    auth.signInWithPopup(twitterProvider);
  }

  const signInWithGithub = () => {
    const githubProvider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(githubProvider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <button className="sign-in" onClick={signInWithFacebook}>Sign in with Facebook</button>
      <button className="sign-in" onClick={signInWithTwitter}>Sign in with Twitter</button>
      <button className="sign-in" onClick={signInWithGithub}>Sign in with GitHub</button>
      <p>Please login.</p>
    </>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function Test() {
  return (
    <>
      <p>Congrats, you're in!</p>
    </>
  )
}

export default App;
