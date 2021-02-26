import "./ForgotPassword.css";
import React, { useRef, useState } from "react"
import { Form, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"


// Exports function `ForgotPassword` so it can be used elsewhere 
export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  // Calls submit function to handle existing passwords
  async function handleSubmit(e) {
    e.preventDefault()

    // Sends email if successful to reset password
    try {
      setMessage("")
      setError("")
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }
  }
  // Displaying bootstrap formating
  return (
    <>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img src="./stylemailicon.png" id="icon" alt="User Icon" />
          </div>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <input type="text" id="login" className="fadeIn second" name="login" placeholder="Email" ref={emailRef} required ></input>
            <input type="submit" className="fadeIn fourth" id="bottom" value="Reset Password"></input>
          </Form>
          <div id="formFooter">
            Already have an account? <Link className="underlineHover" to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  )
}