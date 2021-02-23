import React from "react"
import NavBar from "./NavBar"
import  "./Dashboard.css"
import Footer from "./Footer"


export default function SampleTemplates() {

    return (
        <div>
            <NavBar />
            <h1> This will be where you will see our 10 default templates. Picking a template will take you to the edit template page.</h1>
            <h1>Pick a Template</h1>
            <Footer></Footer>
        </div>
    )
}