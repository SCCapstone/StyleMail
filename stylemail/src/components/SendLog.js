import NavBar from "./NavBar"
import Footer from "./Footer"
import React from "react"
import { GetLogs } from "../api/FireApi"
/**
 * Private Visability
 * Allows listing of authenticated user's sent email logs
 */
const SendLogs = () => {
    // Calls 'GetLogs' function to query user's sent email logs
    let entries = GetLogs()

    return (
      <div>
        <NavBar />
          <div style={{backgroundColor: 'white'}}>
            <h3 style={{fontSize: '35px', textAlign: 'center', paddingTop: '10px', 
            paddingBottom: '10px'}}>Send Log</h3>
            <h4 style={{textAlign:"center"}}>Below is a log of your emails sent using StyleMail</h4>
              <br/>
              <div>
                <ul style={{marginRight:"5%", marginLeft:"5%"}} className="list-group">
                  {entries.map(val => (
                    <li key={val.id} className="list-group-item list-group-item-action list-group-item-secondary d-flex">
                      <p className="p-0 m-0 flex-grow-1">
                        <strong>Time Sent:</strong> {val.timeSent}<br />
                        <strong>To:</strong> {val.emailTo}<br />
                        <strong>Subject:</strong> {val.emailSubject}
                      </p>
                    </li>
                  ))}
                </ul>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                
              </div>  
            </div>
          <Footer/>
      </div>
  )
};
  
  export default SendLogs;