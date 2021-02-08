import React from "react"
import { useAuth } from "../contexts/AuthContext"
import "./Dashboard.css"

export default function NavBar() {
   
    var login = useAuth();
    
    if(login) {
        return (   
                   <div class="topnav">
                       <a href="./"> Dashboard</a>
                       <a href="./profile">Profile</a>
                       <a href="./alltemplates">All Templates</a>
                       <a href="./savedtemplates"> Saved Templates </a>
                       <a href="./sendlog"> Send Log </a>
                       <a href="https://stylemail.app/help" target ="_blank" rel="noopener noreferrer">Help</a>
                       <a href="https://stylemail.app/contact" target ="_blank" rel="noopener noreferrer">Contact</a>
                       <a href="https://stylemail.app/privacy" target ="_blank" rel="noopener noreferrer">Privacy Policy</a>
                       <a href="https://stylemail.app/terms" target ="_blank" rel="noopener noreferrer">Terms of Use</a>
                       <a href="./logout">Sign Out</a>  
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
