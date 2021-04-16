import React from 'react';
import Footer from "./Footer"
import NavBar from "./NavBar"
import { Form, Button } from "react-bootstrap"
import { sendLogEntry } from '../api/FireApi';
/**
 * Private Visability
 * Allows authenticated user to send a provided, premade template
 */

// Sends en email using MailGun API
function sendEmail(sender, recipient, senderEmail, anonymous, subject, messagetextarea, fontselect, fontcolorpicker, bgcolorpicker) {
    // MailGun API credentials
    const mailgun = require("mailgun-js");
    const DOMAIN = "mail.alecfarmer.com";
    const api_key = "fe5c4c3437d840ae313922b5325fa63b-6e0fd3a4-ab857c58";
    const mg = mailgun({apiKey: api_key, domain: DOMAIN});
    let data = {from: "", to: "", subject: "", html: ""};

    // If the user wants their email to be sent anonymously, send it from the address mail@stylemail.app, otherwise send it from their input email
    if(anonymous === "false") {
      data = {
        from: senderEmail,
        to: recipient,
        subject: subject,
        html: "<html><head><style>p{color:" + fontcolorpicker + ";font-size:30px;font-family:\"" + fontselect + "\"}#container{background-color:" + bgcolorpicker + ";text-align:center;}</style></head><body><div id=\"container\"><p>" + messagetextarea + "</p></body></html>",
      };
    }
    else {
      data = {
        from: 'StyleMail <mail@stylemail.app>',
        to: recipient,
        subject: subject,
        html: "<html><head><style>p{color:" + fontcolorpicker + ";font-size:30px;font-family:\"" + fontselect + "\"}#container{background-color:" + bgcolorpicker + ";text-align:center;}</style></head><body><div id=\"container\"><p>" + messagetextarea + "</p></body></html>",
      };
    }

    // Check which sample template the user picked from the previous screen with the grid of options
    if(localStorage && localStorage.getItem('templateChoiceSample')) {
      let tempChoice = localStorage.getItem('templateChoiceSample');

      // Set the HTML of the email using the template and inject the user's entered imformation to customize the template
      // eslint-disable-next-line default-case
      switch(tempChoice) {
        case 'Get Well':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Get Well Soon!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/getwell1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Teacher Appreciation':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">I appreciate you!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/teachapp1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Graduation Announcement':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Join us in celebrating a graduation!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/graduationfinal.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Save The Date':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Save the Date!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/stdate1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Thank You':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Thank You!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/tyou1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Valentines Day':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Be My Valentine!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/valentines1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Happy Birthday':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Happy Birthday!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/hbday1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Business Memo':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Memo:</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/bmemo1.gif\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Good Luck':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Good Luck!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/gluck1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Christmas':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Merry Christmas!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/mchristmas1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
    }
  }
    // Add the email, recipient, and date/time to the user's send log to keep record of which emails they sent using stylemail
    sendLogEntry(data.to, data.subject)

    mg.messages().send(data, function (error, body) {
      console.log("MESSAGE ERROR: ", error);
    });
}
  
  // Opens the HTML of the email in a new browser window for the user to preview their email before sending
  function preview(sender, messagetextarea, fontselect, fontcolorpicker, bgcolorpicker) {
    // Create the window
    var wnd = window.open("StyleMail", "StyleMail", "_blank");

    // Get the user's chosen template
    if(localStorage && localStorage.getItem('templateChoiceSample')) {
      let tempChoice = localStorage.getItem('templateChoiceSample');

      let write = '';

      // Set the HTML of the preview browser window using the sample template HTML and inject the user's input information to customize the template
      // eslint-disable-next-line default-case
      switch(tempChoice) {
        case 'Get Well':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Get Well Soon!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/getwell1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Teacher Appreciation':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">I appreciate you!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/teachapp1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Graduation Announcement':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Join us in celebrating a graduation!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/graduationfinal.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Save The Date':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Save the Date!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/stdate1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Thank You':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Thank You!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/tyou1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Valentines Day':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Be My Valentine!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/valentines1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Happy Birthday':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Happy Birthday!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/hbday1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Business Memo':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Memo:</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/bmemo1.gif\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Good Luck':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Good Luck!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/gluck1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Christmas':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Merry Christmas!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/mchristmas1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
      }
      // Write the HTML to the window
      wnd.document.write(write);
    }
  }
  
  // Opens a dialog box for the user to either send their creation to a printer for printing or to save as a PDF (using print to PDF feature by Microsoft)
  function print(sender, messagetextarea, fontselect, fontcolorpicker, bgcolorpicker) {

    // Create the window
    var wnd = window.open("StyleMail", "Stylemail", "_blank");

    let write = '';

    // Get the user's chosen template
    if(localStorage && localStorage.getItem('templateChoiceSample')) {
      let tempChoice = localStorage.getItem('templateChoiceSample');

      // Set the HTML for the print dialog from the sample template HTML and inject the user's input information to customize the template
      // eslint-disable-next-line default-case
      switch(tempChoice) {
        case 'Get Well':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Get Well Soon!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/getwell1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Teacher Appreciation':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">I appreciate you!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/teachapp1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Graduation Announcement':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Join us in celebrating a graduation!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/graduationfinal.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Save The Date':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Save the Date!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/stdate1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Thank You':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Thank You!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/tyou1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Valentines Day':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Be My Valentine!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/valentines1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Happy Birthday':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Happy Birthday!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/hbday1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Business Memo':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Memo:</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/bmemo11.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Good Luck':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Good Luck!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/gluck1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
        case 'Christmas':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Merry Christmas!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/mchristmas1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with <a href=\"https://run.stylemail.app\" target=\"_blank\">StyleMail</a> by " + sender + "</p><br></div>";
          break;
      }
    }

    // Write the HTML to the window
    wnd.document.write(write);

    // Allow 400 ms of load time to load image assets in the window, then prompt the print dialog
    setTimeout(function()
    {
      wnd.print();
      wnd.close();
    }, 400);
  }

// Constructor for sample template edit page
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    // Declare and initialize the properties before using
    this.state = {
      sender: '',
      recipient: '',
      senderEmail: '',
      anonymous: 'false',
      subject: '',
      messagetextarea: '',
      fontselect: '',
      fontcolorpicker: '',
      bgcolorpicker: '',
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
    let sender = this.state.sender;
    let recipient = this.state.recipient;
    let senderEmail = this.state.senderEmail;
    let anonymous = this.state.anonymous;
    let subject = this.state.subject;
    let messagetextarea = this.state.messagetextarea;
    let fontselect = this.state.fontselect;
    let fontcolorpicker = this.state.fontcolorpicker;
    let bgcolorpicker = this.state.bgcolorpicker;

    // Verifies if the submitted emails are actually an emails
    const emailRegex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    if(!senderEmail.match(emailRegex) || sender.match(emailRegex)) {
      return;
    }

    // Send the email with the input properties
    sendEmail(sender, recipient, senderEmail, anonymous, subject, messagetextarea, fontselect, fontcolorpicker, bgcolorpicker);

    // Trigger a small alert window to notify the user that the email has been successfully sent
    window.alert("Email Sent!");

    // Return to the user's dashboard
    this.props.history.push('/');
  }

  // Runs when the user clicks on the preview button
  previewHandler = (event) => {
    event.preventDefault();

    // Set the final values of the properties
    let sender = this.state.sender;
    let messagetextarea = this.state.messagetextarea;
    let fontselect = this.state.fontselect;
    let fontcolorpicker = this.state.fontcolorpicker;
    let bgcolorpicker = this.state.bgcolorpicker;
    
    // Trigger the preview window
    preview(sender, messagetextarea, fontselect, fontcolorpicker, bgcolorpicker);
  }

  // Runs when the user clicks on the print/save as PDF button
  printHandler = (event) => {
    event.preventDefault();

    // Set the final values of the properties
    let sender = this.state.sender;
    let messagetextarea = this.state.messagetextarea;
    let fontselect = this.state.fontselect;
    let fontcolorpicker = this.state.fontcolorpicker;
    let bgcolorpicker = this.state.bgcolorpicker;
    
    // Trigger the print/save as PDF window
    print(sender, messagetextarea, fontselect, fontcolorpicker, bgcolorpicker);
  }

  // Render the user interface of the web app (the React form for the user to input values to customize the sample templates)
  render() {
    return (
      <div>
      <NavBar/>
        <div style={{backgroundColor: 'white'}}>
          <h1 className="text-center">Customize and Send Template</h1>
          <div style={{paddingLeft: '25px'}}>
            <Form onSubmit={this.formHandler}>
              <h4>Your chosen template is: {localStorage.getItem('templateChoiceSample') || localStorage.getItem('templateChoiceCustom')}</h4>
              <label>
                Recipient Email Address(es):  
                <br/>
                <input type="email" name="recipient" multiple required onChange={this.ChangeHandler} />
                <br/>To send to multiple recipients, separate emails with commas (no spaces). Example: "alex@email.com,ben@email.com"
              </label>
                <br/>
                <br/>
              <label>
                Your First Name:
                <br/>
                <input type="text" name="sender" required onChange={this.ChangeHandler}/>
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
                <input type="text" name="subject" required onChange={this.ChangeHandler} />
              </label>
              <br/>
              <br/>
              <span>Message Text:</span>
                <br/>
                <textarea id="textarea" name="messagetextarea" rows="5" cols="50" placeholder="Type your message here!" required onChange={this.ChangeHandler}></textarea>
              <br/>StyleMail supports emoji! While typing your message, press the Windows key and the period (.) key simultaneously to use emoji in your message.
              <br/>
              <br/>
              <span>Font:</span>
              <br/>
              <select name="fontselect" required onChange={this.ChangeHandler}>
                <option value="Arial">Arial</option>
                <option value="Verdana">Verdana</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Tahoma">Tahoma</option>
                <option value="Trebuchet MS">Trebuchet</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Georgia">Georgia</option>
                <option value="Garamond">Garamond</option>
                <option value="Courier New">Courier New</option>
                <option value="Brush Script MT">Brush Script</option>
                <option value="Impact">Impact</option>
              </select>
              <br/>
              <br/>
              <label>
                <span>Font Color:</span>
                <br/>
                <input type="color" name="fontcolorpicker" required onChange={this.ChangeHandler} />
              </label>
              <br/>
              <br/>
              <label>
                <span>Background Color:</span>
                <br/>
                <input type="color" name="bgcolorpicker" required onChange={this.ChangeHandler} />
              </label>
              <br/>
              <br/>
              <label>
                <strong>Note: Although StyleMail attempts to use the most safest, commonly supported styles, not all style configurations may be supported by every email client (Outlook, Gmail, Yahoo!, AOL, etc.) Therefore emails may look different in varying email clients.</strong>
              </label>
              <br/>
              <br/>
              <Button className="btn btn-danger" onClick={event =>  this.props.history.push('/sampletemplates')}>
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
            </Form>
          </div>
        </div>
      <Footer/>
    </div>
    );
  }
}

export default MyForm;