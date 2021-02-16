import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
//import { generateUserDocument } from "../firebase"
//import { AddUser } from "./add.user"
import firebase from 'firebase/app';
import "firebase/firestore";
const db = firebase.firestore();

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()



  async function handleSubmit(e) {
    e.preventDefault()

    // Will display error for non-matching passwords
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
    // Regex for password
    var regex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,20}$/;
    
    // Checks if passwords match regex ( 1 capital letter, 1 number, at least 7 long )
    if (!passwordRef.current.value.match(regex)) {
      setError('Your password must have 1 uppercase letter, 1 number, and be more than 7 characters')
    } else {

      // Try signup -- displays errors for password too short (length of 7 or more)
      // and wrong email format
      try {
        setError("")
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        await db.collection("users").doc(emailRef.current.value).set({email: emailRef.current.value})
        .then((docRef) => {
          console.log("Document written with ID:", docRef.id);
        })
        .catch((errorr) => {
          console.log("Error adding document: ", errorr);
        });
        history.push("/")
      } catch(err) {
        setError(err.message)
      }
  
      setLoading(false)
    }

  }
  
  // Bootstrap formatting calling functions above
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 color-white na">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}