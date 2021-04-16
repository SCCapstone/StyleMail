import React from 'react';
import Footer from "./Footer"
import NavBar from "./NavBar"
import { Form, Button } from "react-bootstrap"
import { sendLogEntry } from "../api/FireApi"
/**
 * Private Visability
 * Allows authenticated user to send their custom made template
 */

// Sends en email using MailGun API
function sendEmail(recipient, senderEmail, anonymous, subject) {
    // MailGun API credentials
    const mailgun = require("mailgun-js");
    const DOMAIN = 'mail.alecfarmer.com';
    const api_key = 'fe5c4c3437d840ae313922b5325fa63b-6e0fd3a4-ab857c58';
    const mg = mailgun({apiKey: api_key, domain: DOMAIN});
    let tempHTML = localStorage.getItem('templateHTMLCustom');
    let data = {from: "", to: "", subject: "", html: ""};

    // If the user wants their email to be sent anonymously, send it from the address mail@stylemail.app, otherwise send it from their input email
    if(anonymous === "false") {
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

    // Retrieve and set the HTML code of the email
    if(localStorage && localStorage.getItem('templateHTMLCustom')) {
      let tempHTML = localStorage.getItem('templateHTMLCustom');
      data.html = tempHTML;
    }

    // Add the email, recipient, and date/time to the user's send log to keep record of which emails they sent using stylemail
    sendLogEntry(data.to, data.subject)

    mg.messages().send(data, function (error, body) {
      console.log(body);
    });
}
  // Opens the HTML of the email in a new browser window for the user to preview their email before sending
  function preview() {
    // Create the window
    var wnd = window.open("StyleMail", "Stylemail", "_blank");

    // Retrieve and set the HTML code of the preview window
    if(localStorage && localStorage.getItem('templateHTMLCustom')) {
      let tempHTML = localStorage.getItem('templateHTMLCustom');

      // Write the HTML to the window
      wnd.document.write(tempHTML);
    }
  }
  
  // Opens a dialog box for the user to either send their creation to a printer for printing or to save as a PDF (using print to PDF feature by Microsoft)
  function print() {

    // Create the window
    var wnd = window.open("StyleMail", "Stylemail", "_blank");

    // Retrieve and set the HTML code of the preview window
    if(localStorage && localStorage.getItem('templateHTMLCustom')) {
      let tempHTML = localStorage.getItem('templateHTMLCustom');

      // Write the HTML to the window
      wnd.document.write(tempHTML);

      // Allow 400 ms of load time to load image assets in the window, then prompt the print dialog
      setTimeout(function()
      {
        wnd.print();
        wnd.close();
      }, 400);
        
      }
  }

  // Constructor for custom template edit page
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    // Declare and initialize the properties before using
    this.state = {
      recipient: '',
      senderEmail: '',
      anonymous: 'false',
      subject: '',
    };
  }
  // Change handler to adjust the properties as the user inputs information into the React form
  ChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  // Runs when the user submits the React form
  formHandler = (event) => {
    event.preventDefault();

    // Set the final values of the properties because the user is done editing
    let recipient = this.state.recipient;
    let senderEmail = this.state.senderEmail;
    let anonymous = this.state.anonymous;
    let subject = this.state.subject;

    // Verifies if the submitted email is actually an email
    const emailRegex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    if(!senderEmail.match(emailRegex)) {
      return;
    }

    // Send the email with the input properties
    sendEmail(recipient, senderEmail, anonymous, subject);

    // Trigger a small alert window to notify the user that the email has been successfully sent
    window.alert("Email Sent!");

    // Return to the user's dashboard
    this.props.history.push('/');
  }

  // Runs when the user's clicks on the preview button
  previewHandler = (event) => {
    event.preventDefault();
    
    // Trigger the preview window
    preview();
  }

  // Runs when the user clicks on the print/save as PDF button
  printHandler = (event) => {
    event.preventDefault();
    
    // Trigger the print/save as PDF window
    print();
  }

  // Render the user interface of the web app (the React form for customization)
  render() {
    return (
      <div>
        <NavBar/>
          <div style={{backgroundColor: 'white'}}>
            <h1 className="text-center mb-4">Send Template</h1>
              <div style={{paddingLeft: '25px'}}>
                <Form onSubmit={this.formHandler}>
                  <div>
                    <h4>Your chosen template is: {localStorage.getItem('templateChoiceCustom')}</h4>
                    <br/>
                    <label>
                      Recipient Email Address(es): 
                      <br/>
                      <input type="email" name="recipient" multiple required onChange={this.ChangeHandler} />
                      <br/>To send to multiple recipients, separate emails with commas (no spaces). Example: "alex@email.com, ben@email.com"
                    </label>
                    <br/>
                    <br/>
                    <label>
                      Your Email:
                      <br/>
                      <input type="text" name="senderEmail" required onChange={this.ChangeHandler} />
                    </label>
                    <label>
                      <input type="checkbox" name="anonymous" value="true" onChange={this.ChangeHandler} /><span>   </span>
                      Check this box if you want your email(s) to be sent anonymously. If the box is checked, emails will be marked as sent from mail@stylemail.app. If the box is unchecked, the emails will be marked as sent from your email above.
                    </label>
                    <br/>
                    <br/>
                    <label>
                      Email Subject:
                      <br/>
                      <input type="text" name="subject" required onChange={this.ChangeHandler}/>
                    </label>
                    <label>
                      <strong>Note: Not all HTML components and CSS styles may be supported by every email client (Outlook, Gmail, Yahoo!, AOL, etc.) Therefore emails may look different in varying email clients.</strong>
                    </label>
                    <br/>
                    <br/>
                    <Button className="btn btn-danger" onClick={event =>  this.props.history.push('/customtemplates')}>
                      Cancel
                    </Button>
                    <br/>
                    <br/>
                    <Button className="btn btn-secondary" onClick={this.previewHandler}>Preview (Opens in new browser window)</Button>
                    <br/>
                    <br/>
                    <Button className="btn btn-secondary" onClick={this.printHandler}>Print / Save as PDF</Button>
                    <br/>
                    <br/>
                    <Button className="btn btn-primary" type="submit">Send Email</Button>
                    <br/>
                    <br/>
                  </div>
                </Form>
              </div>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default MyForm;