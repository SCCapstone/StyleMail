import "./Dashboard.css"
import Footer from "./Footer"
import NavBar from "./NavBar"
import Logo from "./Images/StyleMailLogoWhite1.png"
import React from "react"
import { Card } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
/**
 * Private Visability
 * Main landing page for all authenticated users
 */
export default function Dashboard() {
  const { currentUser } = useAuth()
  const history = useHistory()
  const handleST = () => history.push('/sampletemplates');
  const handleCT = () => history.push('/customtemplates');

  return (
    <> 
      <Card>
        <NavBar/>
      </Card>

      <Card>
        <Card.Body>
          <div style={{textAlign:"center"}}>
            <img alt="StyleMail Logo" className="mobile-img" src={Logo} width="40%"/>
          </div>
          <br/>
          <div>
          <h1 className="mobile-size-h1 text-center" id="center">Welcome back to StyleMail, {currentUser.email}!</h1>
          <h3 className="mobile-size-h3 text-center">What would you like to do?</h3>
            <br></br>
          </div>
          <br/>
          <div className="options">
            <div className="btn">
            <button className="btn-outline-dark dash-button" onClick={handleST}>Send emails using ready-to-go sample templates (Recommended)</button>
            <br></br>
            </div>
            <br/>
            <div className="btn">
            <button className="btn-outline-dark dash-button" onClick={handleCT}>Create custom templates using a fully-featured text editor</button>
            </div>
            <br></br>
          </div>
        </Card.Body>       
       </Card>

      <Footer></Footer>
    </>
  )
}