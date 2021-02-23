import React from "react"
import NavBar from "./NavBar"
import  "./Dashboard.css"
import { Card, Button, Alert } from "react-bootstrap"
import TemplateList from "./TemplateList"
import TemplateAdd from "./TemplateAdd"
import Footer from "./Footer"


export default function CustomTemplates() {

    return (
        <div>
            <NavBar />
            <h1> This will be where you see your custom templates. Users can create new custom templates with a title and html code. They can edit the title or code of each custom template. Clicking on a custom template will take them to the template edit page.</h1>
            <Card.Body>
                <TemplateList/>
                <TemplateAdd/>
            </Card.Body>

            <Footer></Footer>
        </div>
    )
}