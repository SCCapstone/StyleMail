import React from 'react';
//import ReactDOM from 'react-dom';
import Footer from "./Footer"
import { Card } from "react-bootstrap" //Button, Alert
import firebase from 'firebase/app';
import "firebase/firestore";
const db = firebase.firestore();

function sendEmail(sender, recipient, subject, messagetextarea, fontselect, fontcolorpicker, bgcolorpicker) {
    const mailgun = require("mailgun-js");
    const DOMAIN = "mail.alecfarmer.com";
    const api_key = "fe5c4c3437d840ae313922b5325fa63b-6e0fd3a4-ab857c58";
    const mg = mailgun({apiKey: api_key, domain: DOMAIN});
    const data = {
      from: 'StyleMail <mail@stylemail.app>',
      to: recipient,
      subject: subject,
      html: "<html><head><style>p{color:" + fontcolorpicker + ";font-size:30px;font-family:\"" + fontselect + "\"}#container{background-color:" + bgcolorpicker + ";text-align:center;}</style></head><body><div id=\"container\"><p>" + messagetextarea + "</p></body></html>",
    };

    if(localStorage && localStorage.getItem('templateChoiceSample')) {
      let tempChoice = localStorage.getItem('templateChoiceSample');

      // eslint-disable-next-line default-case
      switch(tempChoice) {
        case 'Get Well':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Get Well</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Teacher Appreciation':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Teacher Appreciation</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Grad Announcement':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Graduation Announcement</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Save The Date':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Save the Date</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Thank You':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Thank You</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Valentines':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Be My Valentine</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Happy Birthday':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Happy Birthday</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Business Memo':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Business Memo</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Good Luck':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Good Luck</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Christmas':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Merry Christmas</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
    }
  }

    mg.messages().send(data, function (error, body) {
      console.log(error);
    });
}
  
  function preview(sender, messagetextarea, fontselect, fontcolorpicker, bgcolorpicker) {
    var wnd = window.open("StyleMail", "Stylemail", "_blank");

    if(localStorage && localStorage.getItem('templateChoiceSample')) {
      let tempChoice = localStorage.getItem('templateChoiceSample');

      let write = '';

      // eslint-disable-next-line default-case
      switch(tempChoice) {
        case 'Get Well':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Get Well</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Teacher Appreciation':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Teacher Appreciation</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Grad Announcement':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Graduation Announcement</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Save The Date':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Save the Date</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Thank You':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Thank You</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Valentines':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Be My Valentine</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Happy Birthday':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Happy Birthday</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Business Memo':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Business Memo</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Good Luck':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Good Luck</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Christmas':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Merry Christmas</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
      }
      wnd.document.write(write);
    }
  }
  
  function print(sender, messagetextarea, fontselect, fontcolorpicker, bgcolorpicker) {
    var wnd = window.open("StyleMail", "Stylemail", "_blank");

    let write = '';

    if(localStorage && localStorage.getItem('templateChoiceSample')) {
      let tempChoice = localStorage.getItem('templateChoiceSample');

      // eslint-disable-next-line default-case
      switch(tempChoice) {
        case 'Get Well':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Get Well</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Teacher Appreciation':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Teacher Appreciation</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Grad Announcement':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Graduation Announcement</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Save The Date':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Save the Date</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Thank You':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Thank You</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Valentines':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Be My Valentine</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Happy Birthday':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Happy Birthday</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Business Memo':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Business Memo</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Good Luck':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Good Luck</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
        case 'Christmas':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Christmas</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p></div>";
          break;
      }
    }

    wnd.document.write(write);
    wnd.print();
  }
  
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sender: '',
      recipient: '',
      subject: '',
      messagetextarea: '',
      fontselect: '',
      fontcolorpicker: '',
      bgcolorpicker: '',
    };
  }

  ChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  formHandler = (event) => {
    event.preventDefault();
    let sender = this.state.sender;
    let recipient = this.state.recipient;
    let subject = this.state.subject;
    let messagetextarea = this.state.messagetextarea;
    let fontselect = this.state.fontselect;
    let fontcolorpicker = this.state.fontcolorpicker;
    let bgcolorpicker = this.state.bgcolorpicker;

    sendEmail(sender, recipient, subject, messagetextarea, fontselect, fontcolorpicker, bgcolorpicker);

    // Formatting the date for database entry
    const months = ["Janurary", "Feburary", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date();
    const formattedDate = months[date.getMonth()] + " " + date.getDay() + ", " + date.getFullYear() + " " + date.getHours() +":"+ date.getMinutes();
    // Database entry
    var log = db.collection('users').doc(firebase.auth().currentUser.email).collection('sendlog');
    log.add({timeSent: formattedDate, emailTo: recipient, emailSubject: subject});

    window.alert("Email Sent!");

    this.props.history.push('/');
  }

  previewHandler = (event) => {
    event.preventDefault();

    let sender = this.state.sender;
    let messagetextarea = this.state.messagetextarea;
    let fontselect = this.state.fontselect;
    let fontcolorpicker = this.state.fontcolorpicker;
    let bgcolorpicker = this.state.bgcolorpicker;
    
    preview(sender, messagetextarea, fontselect, fontcolorpicker, bgcolorpicker);
  }

  printHandler = (event) => {
    event.preventDefault();

    let sender = this.state.sender;
    let messagetextarea = this.state.messagetextarea;
    let fontselect = this.state.fontselect;
    let fontcolorpicker = this.state.fontcolorpicker;
    let bgcolorpicker = this.state.bgcolorpicker;
    
    print(sender, messagetextarea, fontselect, fontcolorpicker, bgcolorpicker);
  }

  render() {
    return (
    <div style={{paddingLeft : "25px"}}>
      <form onSubmit={this.formHandler}>
      <Card style={{backgroundColor:'#372392'}}>
        <Card.Body>
          <h1 className="text-center mb-4" style={{color:'#ffffff'}}>Customize and Send Template</h1>
        </Card.Body>
       </Card>
      <div>
        <br></br>
      </div>
      <h3>Your chosen template is: {localStorage.getItem('templateChoiceSample') || localStorage.getItem('templateChoiceCustom')}</h3>
      <div>
        <br></br>
      </div>
      <label>
          From: 
          <br></br>
          <input type="text" name="sender" required onChange={this.ChangeHandler} />
      </label>
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
      Message Text:
      <br></br>
      <textarea id="textarea" name="messagetextarea" rows="5" cols="50" placeholder="Type your message here!" required onChange={this.ChangeHandler}></textarea>
      <br></br>StyleMail supports emoji! While typing your message, press the Windows key and the period (.) key simultaneously to use emoji in your message.
      <div>
        <br></br>
      </div>
      Font:
      <br></br>
      <select name="fontselect" required onChange={this.ChangeHandler}>
        <option value="Arial">Arial</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Garamond">Garamond</option>
        <option value="Courier New">Courier New</option>
        <option value="Brush Script MT">Brush Script</option>
        <option value="Impact">Impact</option>
      </select>
      <div>
        <br></br>
      </div>
      <label>
          Font Color:
          <br></br>
          <input type="color" name="fontcolorpicker" required onChange={this.ChangeHandler} />
      </label>
      <div>
        <br></br>
      </div>
      <label>
          Background Color:
          <br></br>
          <input type="color" name="bgcolorpicker" required onChange={this.ChangeHandler} />
      </label>
      <div>
        <br></br>
      </div>
      <button onClick={event =>  window.location.href='/SampleTemplates'}>
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