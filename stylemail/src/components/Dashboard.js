import "./Dashboard.css"
import Footer from "./Footer"
import NavBar from "./NavBar"
import React from "react"
import { Card } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"



export default function Dashboard() {
  const { currentUser } = useAuth()
  const history = useHistory()
  const handleST = () => history.push('/sampletemplates');
  const handleCT = () => history.push('/customtemplates');



  return (
    <> 
    
      <Card>
        <NavBar />
      </Card> 

      
      <Card>
        <Card.Body>
          <h1 id="center">Welcome back to StyleMail, {currentUser.email}!</h1>
          <h3>What would you like to do?</h3>
          <div>
            <br></br>
          </div>
          <button className="btn btn-outline-dark" onClick={handleST}>Quickly send an email using one of our ready-to-go sample templates (Recommended)</button>
          <div>
            <br></br>
          </div>
          <button className="btn btn-outline-dark" onClick={handleCT}>Create your own custom email templates using HTML and CSS</button>
        </Card.Body>       
       </Card>

      <Footer></Footer>

    </>
  )
}