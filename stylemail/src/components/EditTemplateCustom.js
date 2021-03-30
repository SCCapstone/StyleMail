import React from 'react';
import Footer from "./Footer"
import NavBar from "./NavBar"
import { Card } from "react-bootstrap"
import { sendLogEntry } from "../api/FireApi"
/**
 * Private Visability
 * Allows authenticated user to send their custom made template
 */
function sendEmail(recipient, senderEmail, anonymous, subject) {
    const mailgun = require("mailgun-js");
    const DOMAIN = 'mail.alecfarmer.com';
    const api_key = 'fe5c4c3437d840ae313922b5325fa63b-6e0fd3a4-ab857c58';
    const mg = mailgun({apiKey: api_key, domain: DOMAIN});
    let tempHTML = localStorage.getItem('templateHTMLCustom');
    let data = {from: "", to: "", subject: "", html: ""};
    if(anonymous == "false") {
      data = {
        from: senderEmail,
        to: recipient,
        subject: subject,
        html: tempHTML,
      };
    }
    else {
      data = {
        from: 'StyleMail <mail@stylemail.app>',
        to: recipient,
        subject: subject,
        html: tempHTML,
      };
    }

    if(localStorage && localStorage.getItem('templateHTMLCustom')) {
      let tempHTML = localStorage.getItem('templateHTMLCustom');
      data.html = tempHTML;
    }

    sendLogEntry(data.to, data.subject)

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
      senderEmail: '',
      anonymous: 'false',
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
    let senderEmail = this.state.senderEmail;
    let anonymous = this.state.anonymous;
    let subject = this.state.subject;

    sendEmail(recipient, senderEmail, anonymous, subject);

    window.alert("Email Sent!");

    this.props.history.push('/');
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
      <div>
      <NavBar />
      </div>
      <form onSubmit={this.formHandler}>
      <Card style={{backgroundColor:'#372392'}}>
        <Card.Body>
          <h1 className="text-center mb-4" style={{color:'#ffffff'}}>Send Template</h1>
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
          Recipient Email Address(es): 
          <br></br>
          <input type="email" name="recipient" multiple required onChange={this.ChangeHandler} />
          <br></br>To send to multiple recipients, separate emails with commas (no spaces). Example: "alex@email.com,ben@email.com"
      </label>
      <div>
        <br></br>
      </div>
      <label>
          Your Email:
          <br></br>
          <input type="text" name="senderEmail" required onChange={this.ChangeHandler} />
      </label>
      <label>
      <input type="checkbox" name="anonymous" value="true" onChange={this.ChangeHandler} /><span>   </span>
          Check this box if you want your email(s) to be sent anonymously. If the box is checked, emails will be marked as sent from mail@stylemail.app. If the box is unchecked, the emails will be marked as sent from your email above.
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
      <button onClick={event =>  this.props.history.push('/customtemplates')}>
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