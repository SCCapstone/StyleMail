import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
//import { getUserDocument } from "../firebase"
import TemplateList from "./TemplateList"
import TemplateAdd from "./TemplateAdd"
import NavBar from "./NavBar"
import  "./Dashboard.css"
import Footer from "./Footer"



export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()  


  
  // Handles logout function -- Will push user to dashboad if possible -- Displays error if one is found
  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
      NavBar.state.loggedIn = true;
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <> 
    
      <Card>
        <NavBar />
      </Card> 

      
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Welcome back to StyleMail, {currentUser.email}!</h2>
          <h3>What would you like to do?</h3>
          <div>
            <br></br>
          </div>
          <button variant="link" onClick={event =>  window.location.href='/sampletemplates'}>Quickly send an email using one of our ready-to-go sample templates (Recommended)</button>
          <div>
            <br></br>
          </div>
          <button variant="link" onClick={event =>  window.location.href='/customtemplates'}>Create your own custom email templates using HTML and CSS</button>
        </Card.Body>       
       </Card>

      <Footer></Footer>

    </>
  )
}