import "./Signup.css";
import React, { useRef, useState } from "react"
import { Form, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import firebase from 'firebase/app';
import "firebase/firestore";
const db = firebase.firestore();

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const history = useHistory()
  const date = new Date();
  const months = ["Janurary", "Feburary", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const formattedDate = months[date.getMonth()] + " " + date.getDay() + ", " + date.getFullYear() + " " + date.getHours() +":"+ date.getMinutes();


  // Handles signup authentication
  async function handleSubmit(e) {
    e.preventDefault()
    var regex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,20}$/; // Regex for password

    // Will display error for non-matching passwords
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
    // Checks if passwords match regex ( 1 capital letter, 1 number, at least 7 long ) 
    else if (!passwordRef.current.value.match(regex)) {
      setError('Your password must have 1 uppercase letter, 1 number, and be more than 7 characters')
    }
    else {

      try {
        setError("")
        await signup(emailRef.current.value, passwordRef.current.value) // Calls signup function from AuthContext
        await db.collection("users").doc(emailRef.current.value).set({email: emailRef.current.value, accountCreation: formattedDate}) // Adds account creation time to database
        history.push("/") // Pushes user to Dashboard once authenticated
      } catch(err) {
        setError(err.message)
      }
    }
  }
  
  // Bootstrap formatting calling functions above
  //Need to fix the logo
  return (
    <>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <h1>Welcome to StyleMail!</h1>
            <img src=".\Images\stylemaillogowhite.png" id="icon" alt="User Icon" />
          </div>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <input type="text" id="login" className="fadeIn second" placeholder="Email" ref={emailRef} required ></input>
            <input type="password" id="password" className="fadeIn third" placeholder="Password" ref={passwordRef} required ></input>
            <input type="password" id="password" className="fadeIn third" placeholder="Confirm Password" ref={passwordConfirmRef} required ></input>
            <input type="submit" className="fadeIn fourth" id="bottomSU" value="Sign Up"></input>
          </Form>
          <div id="formFooter">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>
    </>
  )
}