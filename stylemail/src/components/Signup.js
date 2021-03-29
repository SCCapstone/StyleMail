import "./Auth.css"
import React, { useRef, useState } from "react"
import { Form, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
/**
 * Public Visability
 * Allows any user to signup for an account
 */
export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup, APIerror } = useAuth()
  const [error, setError] = useState("")
  const history = useHistory()
  const regex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,20}$/;
  // Verifies password strength, confirms password, then calls 'signup' with provided user values
  async function handleSubmit(e) {
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match. Try again!")
    } else if (!passwordRef.current.value.match(regex)) {
      setError('Your password must have 1 uppercase letter, 1 number, and be more than 7 characters')
    }
    await signup(emailRef.current.value, passwordRef.current.value)
    history.push("/")
  }
  
  return (
    <>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img src="./stylemailicon.png" id="icon" alt="User Icon" />
          </div>
          {error && <Alert variant="danger">{error}</Alert>}
          {APIerror && <Alert variant="danger">{APIerror}</Alert>}
          <Form onSubmit={handleSubmit}>
            <input type="text" id="login" className="fadeIn second auth-input-text" placeholder="Email" ref={emailRef} required ></input>
            <input type="password" id="password" className="fadeIn third auth-input-password" placeholder="Password" ref={passwordRef} required ></input>
            <input type="password" id="password" className="fadeIn third auth-input-password" placeholder="Confirm Password" ref={passwordConfirmRef} required ></input>
            <input type="button" onClick={handleSubmit} className="fadeIn fourth auth-input-btn auth-input-submit" id="bottomSU" value="Sign Up"></input>
          </Form>
          <div id="formFooter">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>
    </>
  )
}