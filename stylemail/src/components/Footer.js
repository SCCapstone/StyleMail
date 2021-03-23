import  "./Dashboard.css"
import { Card } from "react-bootstrap"
/**
 * Public and Private Visability
 * Provides global footer
 */
export default function Footer() {
  return (
    <> 
      <Card style={{backgroundColor:'#372392'}}>
        <Card.Body>
          <h4 className="text-center mb-4 mobile-footer" style={{color:'#ffffff'}}>Copyright © 2021 StyleMail. All rights reserved.</h4>
        </Card.Body>       
       </Card>
    </>
  )
}