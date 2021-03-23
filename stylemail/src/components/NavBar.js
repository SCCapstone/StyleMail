/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Dashboard.css"
import React from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
/**
 * Public & Private Visability
 * Provides both user and authenticated user a navigation bar with restricted links
 */
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
    
    if(login) {
        return (   
                   <div className="topnav">
                       <Link className="mobile-link" style={{color:'white'}} to="/">Dashboard</Link>
                       <Link style={{color:'white'}} to="/sampletemplates">Sample Templates</Link>
                       <Link style={{color:'white'}} to="/customtemplates">Custom Templates</Link>
                       <Link style={{color:'white'}} to="/sendlog">Send Log</Link>
                       <Link style={{color:'white'}} to="/help">Help</Link>
                       <Link style={{color:'white'}} to="/contact">Contact</Link>
                       <Link style={{color:'white'}} to="/privacy">Privacy Policy</Link>
                       <Link style={{color:'white'}} to="/terms">Terms of Use</Link>
                       <Link style={{color:'white'}} to="/settings">Settings</Link>
                       <a style={{color:'white'}} onClick={handleLogout}>Sign Out</a>
                   </div>
        )
    }
    else {
        return (
            <div className="topnav">
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
