/* eslint-disable jsx-a11y/alt-text */
import "./Auth.css";
import React, { useRef } from "react"
import { GoogleLoginButton, FacebookLoginButton } from "react-social-login-buttons";
import { Form, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
/**
 * Public Visability
 * Allows any user to login to existing account
 * Allows any user to login/signup with Google or Facebook
 */
export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login, googleSignIn, facebookSignIn, APIError } = useAuth()
  const history = useHistory()

  async function handleSubmit(e) {
    await login(emailRef.current.value, passwordRef.current.value)
    history.push("/")
  }

  async function handleGoogle(e) {
    await googleSignIn()
    history.push("/")
  }

  async function handleFacebook(e) {
    await facebookSignIn()
    history.push("/")
  }
  
  return (
    <>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img src="./stylemailicon.png" id="icon" alt="User Icon" />
          </div>
          {(APIError) && <Alert variant="danger">{APIError}</Alert>}
          <Form>
            <input type="text" id="login" className="fadeIn second auth-input-text" name="login" placeholder="Email" ref={emailRef} required ></input>
            <input type="password" id="password" className="fadeIn third auth-input-password" name="login" placeholder="Password" ref={passwordRef} required ></input>
            <input type="button" onClick={handleSubmit} className="fadeIn fourth auth-input-btn auth-input-submit" id="bottom" value="Log In"></input>
          </Form>
          <div className="or-container fadeIn fourth">
            <div className="line-separator-left fadeIn fourth"></div>
            <div className="or-label fadeIn fourth">or</div>
            <div className="line-separator-right fadeIn fourth"></div>
          </div>
          <div className="row fadeIn fourth" style={{marginLeft: '30px', marginRight: '30px'}}>
            <GoogleLoginButton onClick={handleGoogle}/>
            <FacebookLoginButton onClick={handleFacebook}/>
          </div><br/>
          <div id="formFooter">
            <Link className="auth-link fadeIn fourth" to="/signup"> Sign Up</Link><br></br>
            <Link className="auth-link fadeIn fourth" to="/forgot-password"> Forgot Password</Link>
          </div>
        </div>
      </div>
    </>
  )
}