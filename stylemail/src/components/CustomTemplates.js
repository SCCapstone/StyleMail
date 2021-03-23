import  "./Dashboard.css"
import React from "react"
import NavBar from "./NavBar"
import TemplateList from "./TemplateList"
import TemplateAdd from "./TemplateAdd"
import Footer from "./Footer"
import { Card } from "react-bootstrap"

/**
 * Private Visability
 * Combining Template List and Template Add 
 * modules for easier access and functionality
 */

export default function CustomTemplates() {

    return (
        <div>
            <NavBar />
            <Card.Body>
                <TemplateList/>
                <TemplateAdd/>
            </Card.Body>

            <Footer></Footer>
        </div>
    )
}