import React from "react"
import NavBar from "./NavBar"
import  "./Dashboard.css"


export default function SendLog() {

    return (
        <div>
            <NavBar />
            <h1> This is where you can see your send log! Each time the form on the edit template page is submitted, there will be a new entry here with the date and time the form was submitted as well as the email of the recipient, giving the user a log of their sent emails.</h1>
        </div>
    )
}
