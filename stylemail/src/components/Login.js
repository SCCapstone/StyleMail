import "./Login.css"
import React, { useRef, useState } from "react"
import { Form, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

// Exports the `Login` function so it can be called elsewhere
export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const history = useHistory()

  // Error checks the submitting of logins -- Catches and displays errors found
  async function handleSubmit(e) {
    e.preventDefault()

    // Try login -- will display errors for failed login, wrong password
    try {
      setError("")
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
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
          <Form onSubmit={handleSubmit}>
            <input type="text" id="login" className="fadeIn second" name="login" placeholder="Email" ref={emailRef} required ></input>
            <input type="password" id="password" className="fadeIn third" name="login" placeholder="Password" ref={passwordRef} required ></input>
            <input type="submit" className="fadeIn fourth" id="bottom" value="Log In"></input>
          </Form>
          <div id="formFooter">
            <Link className="underlineHover" to="/signup"> Sign Up</Link><br></br>
            <Link className="underlineHover" to="/forgot-password"> Forgot Password</Link>
          </div>
        </div>
      </div>
    </>
  )
}