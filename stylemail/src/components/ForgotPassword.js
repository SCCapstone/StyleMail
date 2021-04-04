import "./Auth.css";
import React, { useRef, useState } from "react"
import { Form, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
/**
 * Public Visability
 * Allows any user with existing account to reset password
 */
export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  // Handles sending reset password email to user
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setMessage("")
      setError("")
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }
  }
  
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
            <input type="text" id="login" className="fadeIn second auth-input-text" name="login" placeholder="Email" ref={emailRef} required ></input>
            <input type="submit" className="fadeIn fourth auth-input-btn auth-input-submit auth-input-reset" id="bottom" value="Reset Password"></input>
          </Form>
          <div id="formFooter">
            Already have an account? <Link className="auth-link" to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  )
}