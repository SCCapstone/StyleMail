import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import "./Dashboard.css"

export default function NavBar() {
    const [setError] = useState("")
    const { logout } = useAuth()
    const history = useHistory()
    var login = useAuth();

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
    
    if(login) {
        return (   
                   <div class="topnav">
                       <a href="./">Dashboard</a>
                       <a href="./sampletemplates">Sample Templates</a>
                       <a href="./customtemplates">Custom Templates</a>
                       <a href="./templateedit">Edit Template</a>
                       <a href="./sendlog"> Send Log</a>
                       <a href="https://stylemail.app/help" target ="_blank" rel="noopener noreferrer">Help</a>
                       <a href="https://stylemail.app/contact" target ="_blank" rel="noopener noreferrer">Contact</a>
                       <a href="https://stylemail.app/privacy" target ="_blank" rel="noopener noreferrer">Privacy Policy</a>
                       <a href="https://stylemail.app/terms" target ="_blank" rel="noopener noreferrer">Terms of Use</a>
                       <a href="https://stylemail.app" onClick={handleLogout}>Sign Out</a>  
                   </div>
        )
    }
    else {
        return (
            <div class="topnav">
                <a href="https://stylemail.app/index">Home</a>
                <a href="https://run.stylemail.app">Login</a>
                <a href="https://run.stylemail.app">Signup</a>
                <a href="https://stylemail.app/help">Help</a>
                <a href="https://stylemail.app/contact">Contact</a>
                <a href="https://stylemail.app/privacy">Privacy Policy</a>
                <a href="https://stylemail.app/terms">Terms of Use</a>
            </div>
        )
    }
}
