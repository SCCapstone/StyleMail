import "./Dashboard.css"
import React from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function NavBar() {
    const { logout } = useAuth()
    const history = useHistory()
    var login = useAuth();

    async function handleLogout() {
    
        try {
          await logout()
          history.push("/login")
          NavBar.state.loggedIn = true;
        } catch(e) {
          console.log(e.message);
        }
    }
    // Used router link tags instead of href since some links are private routed
    if(login) {
        return (   
                   <div class="topnav">
                       <Link style={{color:'white' }} to="/">Dashboard</Link>
                       <Link style={{color:'white' }} to="/sampletemplates">Sample Templates</Link>
                       <Link style={{color:'white' }} to="/customtemplates">Custom Templates</Link>
                       <Link style={{color:'white' }} to="/edittemplatesample">Edit Template Sample</Link>
                       <Link style={{color:'white' }} to="/edittemplatecustom">Edit Template Custom</Link>
                       <Link style={{color:'white' }} to="/sendlog">Send Log</Link>
                       <a href="https://stylemail.app/help" target ="_blank" rel="noopener noreferrer">Help</a>
                       <a href="https://stylemail.app/contact" target ="_blank" rel="noopener noreferrer">Contact</a>
                       <a href="https://stylemail.app/privacy" target ="_blank" rel="noopener noreferrer">Privacy Policy</a>
                       <a href="https://stylemail.app/terms" target ="_blank" rel="noopener noreferrer">Terms of Use</a>
                       <a style={{color:'white' }} onClick={handleLogout}>Sign Out</a>
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
