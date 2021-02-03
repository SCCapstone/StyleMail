import React from "react"
import { useAuth } from "../contexts/AuthContext"
import "./Dashboard.css"

export default function NavBar() {
   
    var login = useAuth();
    
    if(login) {
        return (   
                   <div class="topnav">
                       <a href="https://stylemail.app/index">Home</a>
                       <a href="./profile">Profile</a>
                       <a href="./savedtemplates"> Saved Templates </a>
                       <a href="https://stylemail.app/help">Help</a>
                       <a href="https://stylemail.app/contact">Contact</a>
                       <a href="https://stylemail.app/privacy">Privacy Policy</a>
                       <a href="https://stylemail.app/terms">Terms of Use</a>
                       <a href="./logout">Log Out</a>  
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
