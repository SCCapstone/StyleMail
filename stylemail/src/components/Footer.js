import  "./Dashboard.css"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
/**
 * Public and Private Visability
 * Provides global footer
 */
export default function Footer() {
  return (
    <> 
      <Card style={{backgroundColor:'#372392'}}>
        <Card.Body>
          <div style={{textAlign: 'center', paddingBottom: '10px', paddingTop: '10px'}}>
            <Link style={{paddingRight: '10px', textDecoration: 'none', color: 'white'}} to="/terms">Terms</Link>
            <Link style={{paddingRight: '10px', textDecoration: 'none', color: 'white'}} to="/privacy">Privacy</Link>
          </div>
          <h4 className="text-center mobile-footer" style={{color:'#ffffff', fontSize: '20px'}}>Copyright © 2021 StyleMail. All rights reserved.</h4>
        </Card.Body>       
       </Card>
    </>
  )
}