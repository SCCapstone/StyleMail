import React from 'react';
import Footer from "./Footer"
import NavBar from "./NavBar"
import { Card } from "react-bootstrap"
import { sendLogEntry } from '../api/FireApi';
/**
 * Private Visability
 * Allows authenticated user to send a provided, premade template
 */
function sendEmail(recipient, senderEmail, anonymous, subject, messagetextarea, fontselect, fontcolorpicker, bgcolorpicker) {
    const mailgun = require("mailgun-js");
    const DOMAIN = "mail.alecfarmer.com";
    const api_key = "fe5c4c3437d840ae313922b5325fa63b-6e0fd3a4-ab857c58";
    const mg = mailgun({apiKey: api_key, domain: DOMAIN});
    let data = {from: "", to: "", subject: "", html: ""};
    if(anonymous == "false") {
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

    if(localStorage && localStorage.getItem('templateChoiceSample')) {
      let tempChoice = localStorage.getItem('templateChoiceSample');

      // eslint-disable-next-line default-case
      switch(tempChoice) {
        case 'Get Well':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Get Well Soon!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/getwell1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with StyleMail</p><br></div>";
          break;
        case 'Teacher Appreciation':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">I appreciate you!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/teachapp1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with StyleMail</p><br></div>";
          break;
        case 'Grad Announcement':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Join us in celebrating a graduation!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/graduationfinal.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with StyleMail</p><br></div>";
          break;
        case 'Save The Date':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Always & Forever</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a></p></div>";
          break;
        case 'Thank You':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Thank You!</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a></p></div>";
          break;
        case 'Valentines':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Be My Valentine!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/valentines1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with StyleMail</p><br></div>";
          break;
        case 'Happy Birthday':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Happy Birthday!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/hbday1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with StyleMail</p><br></div>";
          break;
        case 'Business Memo':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Memo:</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a></p></div>";
          break;
        case 'Good Luck':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Good Luck!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/gluck1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with StyleMail</p><br></div>";
          break;
        case 'Christmas':
          data.html = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Merry Christmas!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/mchristmas1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with StyleMail</p><br></div>";
          break;
    }
  }

    sendLogEntry(data.to, data.subject)

    mg.messages().send(data, function (error, body) {
      console.log("MESSAGE ERROR: ", error);
    });
}
  
  function preview(messagetextarea, fontselect, fontcolorpicker, bgcolorpicker) {
    var wnd = window.open("StyleMail", "Stylemail", "_blank");

    if(localStorage && localStorage.getItem('templateChoiceSample')) {
      let tempChoice = localStorage.getItem('templateChoiceSample');

      let write = '';

      // eslint-disable-next-line default-case
      switch(tempChoice) {
        case 'Get Well':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Get Well Soon!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/getwell1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with StyleMail</p><br></div>";
          break;
        case 'Teacher Appreciation':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">I appreciate you!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/teachapp1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with StyleMail</p><br></div>";
          break;
        case 'Grad Announcement':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Join us in celebrating a graduation!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/graduationfinal.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with StyleMail</p><br></div>";
          break;
        case 'Save The Date':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Always & Forever</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a></p></div>";
          break;
        case 'Thank You':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Thank You!</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a></p></div>";
          break;
        case 'Valentines':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Be My Valentine!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/valentines1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with StyleMail</p><br></div>";
          break;
        case 'Happy Birthday':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Happy Birthday!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/hbday1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with StyleMail</p><br></div>";
          break;
        case 'Business Memo':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Memo:</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a></p></div>";
          break;
        case 'Good Luck':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Good Luck!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/gluck1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with StyleMail</p><br></div>";
          break;
        case 'Christmas':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Merry Christmas!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/mchristmas1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with StyleMail</p><br></div>";
          break;
      }
      wnd.document.write(write);
    }
  }
  
  function print(messagetextarea, fontselect, fontcolorpicker, bgcolorpicker) {
    var wnd = window.open("StyleMail", "Stylemail", "_blank");

    let write = '';

    if(localStorage && localStorage.getItem('templateChoiceSample')) {
      let tempChoice = localStorage.getItem('templateChoiceSample');

      // eslint-disable-next-line default-case
      switch(tempChoice) {
        case 'Get Well':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Get Well Soon!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/getwell1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with StyleMail</p><br></div>";
          break;
        case 'Teacher Appreciation':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">I appreciate you!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/teachapp1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with StyleMail</p><br></div>";
          break;
        case 'Grad Announcement':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Join us in celebrating a graduation!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/graduationfinal.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with StyleMail</p><br></div>";
          break;
        case 'Save The Date':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Always & Forever</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a></p></div>";
          break;
        case 'Thank You':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Thank You!</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a></p></div>";
          break;
        case 'Valentines':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Be My Valentine!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/valentines1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with StyleMail</p><br></div>";
          break;
        case 'Happy Birthday':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Happy Birthday!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/hbday1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with StyleMail</p><br></div>";
          break;
        case 'Business Memo':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><h1 style=\"color:" + fontcolorpicker + ";\">Memo:</h1><p style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</p><p style=\"color:#382492;\">Sent with <a href=\"https://stylemail.app\" target=\"_blank\">StyleMail</a></p></div>";
          break;
        case 'Good Luck':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Good Luck!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/gluck1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with StyleMail</p><br></div>";
          break;
        case 'Christmas':
          write = "<div style=\"background-color:" + bgcolorpicker + ";font-family:" + fontselect + ";text-align:center;\"><br><h1 style=\"color:" + fontcolorpicker + ";\">Merry Christmas!</h1></br><img src=\"https://raw.githubusercontent.com/gwerven/stylemailfiles/master/mchristmas1.png\" width=\"50%\"><br><h2 style=\"color:" + fontcolorpicker + ";\">" + messagetextarea + "</h2></br><p style=\"color:" + fontcolorpicker + ";\">Sent with StyleMail</p><br></div>";
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
    let messagetextarea = this.state.messagetextarea;
    let fontselect = this.state.fontselect;
    let fontcolorpicker = this.state.fontcolorpicker;
    let bgcolorpicker = this.state.bgcolorpicker;

    sendEmail(recipient, senderEmail, anonymous, subject, messagetextarea, fontselect, fontcolorpicker, bgcolorpicker);

    window.alert("Email Sent!");

    this.props.history.push('/');
  }

  previewHandler = (event) => {
    event.preventDefault();

    let messagetextarea = this.state.messagetextarea;
    let fontselect = this.state.fontselect;
    let fontcolorpicker = this.state.fontcolorpicker;
    let bgcolorpicker = this.state.bgcolorpicker;
    
    preview(messagetextarea, fontselect, fontcolorpicker, bgcolorpicker);
  }

  printHandler = (event) => {
    event.preventDefault();

    let messagetextarea = this.state.messagetextarea;
    let fontselect = this.state.fontselect;
    let fontcolorpicker = this.state.fontcolorpicker;
    let bgcolorpicker = this.state.bgcolorpicker;
    
    print(messagetextarea, fontselect, fontcolorpicker, bgcolorpicker);
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
      <label>
          <strong>Note: Although StyleMail attempts to use the most safest, commonly supported styles, not all style configurations may be supported by every email client (Outlook, Gmail, Yahoo!, AOL, etc.) Therefore emails may look different in varying email clients.</strong>
      </label>
      <div>
        <br></br>
      </div>
      <button onClick={event =>  this.props.history.push('/sampletemplates')}>
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