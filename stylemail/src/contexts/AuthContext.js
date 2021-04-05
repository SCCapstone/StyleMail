import React, { useContext, useState, useEffect } from "react"
import { googleProvider, auth, db } from "../firebase"
/**
 * Handles all authentication throughout app
 * Functions are exported using useAuth hook
 */

// A simple formatted date converter
function dateTime() {
  const date = new Date()
  const formattedDT = date.toLocaleString([], {month: 'long', day: '2-digit', year: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric'})
  return formattedDT
}
// Creates a React context state
const AuthContext = React.createContext()

// Exports the useAuth hook
export function useAuth() {
  return useContext(AuthContext)
}

// Main function
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [APIerror, setAPIerror] = useState()
  const [providerName, setProviderName] = useState("")

  // Collects a users provider information (Google or Facebook)
  function getProviderInfo() {
    const user = db.collection('users').doc(auth.currentUser.uid)

    user.get().then((doc) => {
      if (doc.exists) {
          setAPIerror("");
          setProviderName(doc.data().provider);
      }
    })
    return providerName
  }

  // Signup function called when a new user signs up
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      db.collection('users').doc(auth.currentUser.uid)
      .set({
        email: email,
        created: dateTime(),
        lastlogin: dateTime(),
        provider: "firebase",
        uid: auth.currentUser.uid,
      }).catch(APIerror => {
        setAPIerror('Something went wrong with added user to firestore', APIerror)
      })
    }).catch(APIerror => {
      setAPIerror('Something went wrong with sign up', APIerror)
    })
  }

  // Login function called when a user logs in
  async function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      db.collection('users').doc(auth.currentUser.uid)
      .update({
        'lastlogin': dateTime(),
      }).catch(APIerror => {
        setAPIerror("Failed to update last login", APIerror)
      })
    }).catch(APIerror => {
      setAPIerror("Something went wrong... Try again", APIerror)
    })
  }

  // Google sign up function // Will convert or replace existing 
  // account with google login if email already exists
  function googleSignIn() {
    return auth.signInWithPopup(googleProvider)
    .then(result => {
      db.collection('users').doc(auth.currentUser.uid)
      .set({
        email: result.user.email,
        provider: result.credential.providerId,
        created: dateTime(),
        lastlogin: dateTime(),
        uid: auth.currentUser.uid,
      })
      .catch(APIerror => {
        setAPIerror("Something went wrong adding the user to database", APIerror)
      })
    }).catch(function(APIerror) {
      if (APIerror.code === 'auth/account-exists-with-different-credential') {
        var pendingCred = APIerror.credential;
        var email = APIerror.email;
        auth.fetchSignInMethodsForEmail(email).then(function(methods) {
          if (methods[0] === 'password') {
            var password = auth.promptUserForPassword();
            auth.signInWithEmailAndPassword(email, password).then(function(result) {
              return result.user.linkWithCredential(pendingCred);
            })
            return;
          }
          var provider = auth.getProviderForProviderId(methods[0]);
          auth.signInWithPopup(provider).then(function(result) {
            result.user.linkAndRetrieveDataWithCredential(pendingCred).then(function(usercred) {
              return;
            });
          });
        });
      } else {
        setAPIerror("Account already exists. Try loging in with", APIerror)
      }
    });
  }

  // Logout function called for all user logouts
  function logout() {
    return auth.signOut()
    .catch(APIerror => {
      setAPIerror("Something went wrong logging out", APIerror)
    })
  }

  // Called when user resets password
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
    .catch(APIerror => {
      setAPIerror("Something went wrong sending reset password email", APIerror)
    })
  }

  // Called when user updates email from 'Settings' page
  function updateEmail(email) {
    return currentUser.updateEmail(email)
    .catch(APIerror => {
      setAPIerror("This email already exists.")
    })
    .then(() => {
      db.collection('users').doc(auth.currentUser.uid)
      .update({
        'email': email,
      })
      .catch(APIerror => {
        setAPIerror('Error updating user email', APIerror)
      })
    })
    .catch(APIerror => {
      setAPIerror('Something went wrong with email update', APIerror)
    })
  }

  // Called when user updates password from 'Settings' page
  function updatePassword(password) {
    return currentUser.updatePassword(password)
    .catch(APIerror => {
      setAPIerror("Something went wrong updating password", APIerror)
    })
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    APIerror,
    getProviderInfo,
    login,
    signup,
    googleSignIn,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}