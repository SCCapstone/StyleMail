import NavBar from "./NavBar"
import Footer from "./Footer"
import React, { useRef, useState, useEffect } from "react"
import { Form, Alert, Card, Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
/**
 * Private Visability
 * Allows non-provider authenticated user to update email and/or change password
 */
export default function Settings() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail, getProviderInfo } = useAuth()
  const [error, setError] = useState("")
  const [disableBtn, setDisableBtn] = useState("")
  const history = useHistory()
  const regex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,20}$/;
  /** 
   * Calls 'getProviderInfo' to check if authenticated user has provider value
   * Locks inputs & button if provider != null to avoid information collision
   * with said provider
   */
  useEffect(() => {
    try {
      if (getProviderInfo().toString() === "google.com") {
        setError("You have logged in with an external provider (Google). Please update your information through their website.")
        setDisableBtn("disabled")
      } else if (getProviderInfo().toString() === "twitter.com") {
        setError("You have logged in with an external provider (Twitter). Please update your information through their website.")
        setDisableBtn("disabled")
      } else {
        setError("")
        setDisableBtn("")
      }
    } catch(e) {
      setError(e)
    }
  },[getProviderInfo])

  // Verifies provided password strength then calls 'updateEmail' or 'updatePassword'
  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    } else if (!passwordRef.current.value.match(regex)) {
      setError('Your password must have 1 uppercase letter, 1 number, and be more than 7 characters')
    }
    const promises = []
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    // Checks if all if statements are true before the use is redirected
    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
  }

  return (
    <>
    <NavBar/>
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Settings</h2>
        {error && <Alert style={{textAlign: 'center'}} variant="danger">{error}</Alert>}
        <br/>
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              ref={emailRef}
              required
              defaultValue={currentUser.email}
              className="disabled" disabled = {disableBtn}
            />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              ref={passwordRef}
              placeholder="Leave blank to keep the same"
              className="disabled" disabled = {disableBtn}
            />
          </Form.Group>
          <Form.Group id="password-confirm">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              type="password"
              ref={passwordConfirmRef}
              placeholder="Leave blank to keep the same"
              className="disabled" disabled = {disableBtn}
            />
          </Form.Group>
          <div style={{textAlign: 'center'}} >
          <br/>
            <Button className="w-50 disabled" disabled={disableBtn} type="submit">
              Update
            </Button>
          <br></br>
          <br></br>
          <br></br>
          </div>
        </Form>
      </Card.Body>
      <br></br>
    <br></br>
    <br></br> 
    <br></br>
    </Card>
   
    <Footer/>
    </>
  )
}
