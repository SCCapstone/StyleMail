import React, { useRef, useState, useContext } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth, AuthProvider } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
//import { signInWithGoogle, auth } from '../firebase'
import "./Login.css"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login, logInWithGoogle } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    // Try login -- will display errors for failed login, wrong password
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  //const { currentUser } = useContext(AuthProvider);
  //  if (currentUser) {
  //    return history.push("/")
  //  }
  

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
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
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
            <Form.Group>
            <div class="or-container">
              <div class="line-separator"></div>
              <div class="or-label">or</div>
              <div class="line-separator"></div>
            </div>
            <button onClick={logInWithGoogle} class="loginBtn loginBtn--google">
            Login with Google
            </button>
            </Form.Group>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 na">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}