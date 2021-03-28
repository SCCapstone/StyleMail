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

   //Need to fix the logo

  return (
    <> 
    
      <Card>
        <NavBar />
      </Card> 

   
      <Card>
        <Card.Body>
          <div style={{textAlign:"center"}}>
            <img alt="StyleMail Logo" src="..components/Images/stylemaillogowhite.png" width="450px" height="286px"/>
          </div>
          <div>
            <br></br>
          </div>
          <h1 id="center">Welcome back to StyleMail, {currentUser.email}!</h1>
          <h3>What would you like to do today?</h3>
          <div className = "options">
          <div>
            <br></br>
          </div>
          <button className="btn-outline-dark" onClick={handleST}>Ready-to-Go Using Email Templates (Recommended)</button>
          <div>
            <br></br>
          </div>
          <button className="btn-outline-dark" onClick={handleCT}>Custom Correspondence using HTML and CSS</button>
          </div>
        </Card.Body>       
       </Card>

      <Footer></Footer>

    </>
  )
}