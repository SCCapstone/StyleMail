import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "../firebase.js"
import app from "../firebase.js"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

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
/*
  function SignIn() {

    const signInWithGoogle = () => {
      const googleProvider = new app.auth.GoogleAuthProvider();
      app.signInWithPopup(googleProvider);
    }
  
    const signInWithFacebook = () => {
      const facebookProvider = new app.auth.FacebookAuthProvider();
      app.signInWithPopup(facebookProvider);
    }
  
    const signInWithTwitter = () => {
      const twitterProvider = new app.auth.TwitterAuthProvider();
      app.signInWithPopup(twitterProvider);
    }
  
    const signInWithGithub = () => {
      const githubProvider = new app.auth.GithubAuthProvider();
      app.signInWithPopup(githubProvider);
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

const signInWithGoogle = () => {
  const googleProvider = new app.auth.GoogleAuthProvider();
  app.auth.signInWithPopup(googleProvider);
}

const signInWithFacebook = () => {
  const facebookProvider = new app.auth.FacebookAuthProvider();
  app.signInWithPopup(facebookProvider);
}

const signInWithTwitter = () => {
  const twitterProvider = new app.auth.TwitterAuthProvider();
  app.signInWithPopup(twitterProvider);
}

const signInWithGithub = () => {
  const githubProvider = new app.auth.GithubAuthProvider();
  app.signInWithPopup(githubProvider);
}
*/
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
            <Button className="w-100" onClick={signInWithGoogle} type="button">Google</Button>
            <Button className="w-100" type="button">Facebook</Button>
            <Button className="w-100" type="button">Twitter</Button>
            <Button className="w-100" type="button">GitHub</Button>
            <Form.Group>
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}