import React from "react"
import NavBar from "./NavBar"
import  "./Dashboard.css"
import { Card } from "react-bootstrap" //, Button, Alert
import TemplateList from "./TemplateList"
import TemplateAdd from "./TemplateAdd"
import Footer from "./Footer"


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