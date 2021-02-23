import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
//import { getUserDocument } from "../firebase"
import TemplateList from "./TemplateList"
import TemplateAdd from "./TemplateAdd"
import NavBar from "./NavBar"
import  "./Dashboard.css"



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
          <h2 className="text-center mb-4">Welcome back to StyleMail {currentUser.email}!</h2>
          {error && <Alert variant="danger">{error}</Alert>}
        </Card.Body>       
       </Card>

      

    </>
  )
}