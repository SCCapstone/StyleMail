import React from 'react';
import ReactDOM from 'react-dom';
import Footer from "./Footer"
import { Card, Button, Alert } from "react-bootstrap"
import firebase from 'firebase/app';
import "firebase/firestore";
const db = firebase.firestore();

function sendEmail(recipient, subject) {
    const mailgun = require("mailgun-js");
    const DOMAIN = 'MAILGUN_DOMAIN';
    const api_key = 'MAILGUN_API_KEY';
    const mg = mailgun({apiKey: api_key, domain: DOMAIN});
    const data = {
      from: 'StyleMail <mail@stylemail.app>',
      to: recipient,
      subject: subject,
      html: "<html><head><style>p{color:;font-size:30px;font-family:}#container{background-color:;text-align:center;}</style></head><body><div id=\"container\"><p></p></body></html>",
    };

    if(localStorage && localStorage.getItem('templateHTMLCustom')) {
      let tempHTML = localStorage.getItem('templateHTMLCustom');
      data.html = tempHTML;
    }

    mg.messages().send(data, function (error, body) {
      console.log(body);
    });
  }
  
  function preview() {
    var wnd = window.open("StyleMail", "Stylemail", "_blank");
    if(localStorage && localStorage.getItem('templateHTMLCustom')) {
      let tempHTML = localStorage.getItem('templateHTMLCustom');
      wnd.document.write(tempHTML);
    }
  }
  
  function print() {
    var wnd = window.open("StyleMail", "Stylemail", "_blank");
    if(localStorage && localStorage.getItem('templateHTMLCustom')) {
      let tempHTML = localStorage.getItem('templateHTMLCustom');
      wnd.document.write(tempHTML);
      wnd.print();
    }
  }

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: '',
      subject: '',
    };
  }

  ChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  formHandler = (event) => {
    event.preventDefault();

    let recipient = this.state.recipient;
    let subject = this.state.subject;

    sendEmail(recipient, subject);

    window.alert("Email Sent!");

    // Code to save date, time, recipient, subject to send log in firebase for the currently logged in user
    const months = ["Janurary", "Feburary", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date();
    const formattedDate = months[date.getMonth()] + " " + date.getDay() + ", " + date.getFullYear() + " " + date.getHours() +":"+ date.getMinutes();
    // Database entry
    var log = db.collection('users').doc(firebase.auth().currentUser.email).collection('sendlog');
    log.add({timeSent: formattedDate, emailTo: recipient, emailSubject: subject});
  }

  previewHandler = (event) => {
    event.preventDefault();
    
    preview();
  }

  printHandler = (event) => {
    event.preventDefault();
    
    print();
  }

  render() {
    return (
    <div style={{paddingLeft : "25px"}}>
      <form onSubmit={this.formHandler}>
      <Card style={{backgroundColor:'#372392'}}>
        <Card.Body>
          <h1 className="text-center mb-4" style={{color:'#ffffff'}}>Edit Template</h1>
        </Card.Body>
       </Card>
       <div>
        <br></br>
      </div>
      <h3>Your chosen template is: {localStorage.getItem('templateChoiceCustom')}</h3>
      <div>
        <br></br>
      </div>
      <label>
          Recipient Email Address: 
          <br></br>
          <input type="text" name="recipient" required onChange={this.ChangeHandler} />
      </label>
      <div>
        <br></br>
      </div>
      <label>
          Email Subject:
          <br></br>
          <input type="text" name="subject" required onChange={this.ChangeHandler} />
      </label>
      <div>
        <br></br>
      </div>
      <button onClick={event =>  window.location.href='/'}>
        Cancel
      </button>
      <div>
        <br></br>
      </div>
      <button onClick={this.previewHandler}>
        Preview (Opens in new browser window) 
      </button>
      <div>
        <br></br>
      </div>
      <button onClick={this.printHandler}>
        Print
      </button>
      <div>
        <br></br>
      </div>
      <button onClick={this.printHandler}>
        Save as PDF
      </button>
      <div>
        <br></br>
      </div>
      <input type="submit" value="Send Email" />
      </form>
      <div>
        <br></br>
      </div>
      <Footer></Footer>
      </div>
    );
  }
}

export default MyForm;