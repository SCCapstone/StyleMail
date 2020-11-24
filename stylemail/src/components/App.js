//import React, { useRef, useState } from 'react';

import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
//import UpdateProfile from "./UpdateProfile"
/*
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
<PrivateRoute path="/update-profile" component={UpdateProfile} />
*/

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}
/*
const emailTxt = document.getElementById();
const passTxt = document.getElementById();
const btnLogin = document.getElementById();
const btnSignUp = document.getElementById();
const btnLogout = document.getElementById();

// Add login (regular email & pass) event
btnLogin.addEventListener('click', e => {
  const email = emailTxt.value;
  const pass = passTxt.value;
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message)); // Show error message when failed
});

// Add signup event
btnSignUp.addEventListener('click', e => {
  //TODO check if email is valid
  const email = emailTxt.value;
  const pass = passTxt.value;
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message)); // Show error message when failed
});

// Add logout event
btnLogout.addEventListener('click', e => {
  firebase.auth().signout();
});

// Add realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser); // show popup to user
  }
  else {
    console.log('not logged in') // show popup to user
  }
});

/*
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
*/
export default App;
