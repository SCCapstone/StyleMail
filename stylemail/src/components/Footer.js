import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
//import { getUserDocument } from "../firebase"
import TemplateList from "./TemplateList"
import TemplateAdd from "./TemplateAdd"
import NavBar from "./NavBar"
import  "./Dashboard.css"



export default function Footer() {
  return (
    <> 
      <Card style={{backgroundColor:'#372392'}}>
        <Card.Body>
          <h4 className="text-center mb-4" style={{color:'#ffffff'}}>Copyright © 2021 StyleMail. All rights reserved.</h4>
        </Card.Body>       
       </Card>
    </>
  )
}