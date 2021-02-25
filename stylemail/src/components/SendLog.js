import React from "react"
import NavBar from "./NavBar"
import  "./Dashboard.css"
import Footer from "./Footer"

export default function SendLog() {

    return (
        <div>
            <NavBar />
            <h1> This is where you can see your send log. Each time the form on the edit template page is submitted, there will be a new entry here with the date and time the form was submitted as well as the email of the recipient, giving the user a log of their sent emails. Ex: TIME/DATE: 2/23/2021 11:51 AM RECIPIENT: gwerven@gmail.com</h1>
            <Footer></Footer>
        </div>
        // Firebase code to query and get table of the sent emails
    )
}
