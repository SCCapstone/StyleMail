import React from 'react';
import ReactDOM from 'react-dom';

function sendEmail(recipient, subject, messagetextarea, fontselect, fontcolorpicker, bgcolorpicker, imagelink) {
    const mailgun = require("mailgun-js");
    const DOMAIN = 'mail.stylemail.app';
    const api_key = 'e9cbc6090c47f4e01c881ec9ad871702-77751bfc-f23a63ab';
    const mg = mailgun({apiKey: api_key, domain: DOMAIN});
    const data = {
      from: 'StyleMail <mail@stylemail.app>',
      to: recipient,
      subject: subject,
      html: "<html><head><style>p{color:" + fontcolorpicker + ";font-size:30px;font-family:\"" + fontselect + "\"}#container{background-color:" + bgcolorpicker + ";text-align:center;}</style></head><body><div id=\"container\"><p>" + messagetextarea + "</p><img class=\"adapt-img\" src=\"" + imagelink + "\" width=\"600\"/></div></body></html>",
    };
    mg.messages().send(data, function (error, body) {
      console.log(body);
    });
  }
  
  function preview(messagetextarea, fontselect, fontcolorpicker, bgcolorpicker, imagelink) {
    var wnd = window.open("StyleMail", "Stylemail", "_blank");
    wnd.document.write("<html><head><style>p{color:" + fontcolorpicker + ";font-size:30px;font-family:\"" + fontselect + "\"}#container{background-color:" + bgcolorpicker + ";text-align:center;}</style></head><body><div id=\"container\"><p>" + messagetextarea + "</p><img class=\"adapt-img\" src=\"" + imagelink + "\" width=\"600\"/></div></body></html>");
  }
  
  function print(messagetextarea, fontselect, fontcolorpicker, bgcolorpicker, imagelink) {
    var wnd = window.open("StyleMail", "Stylemail", "_blank");
    wnd.document.write("<html><head><style>p{color:" + fontcolorpicker + ";font-size:30px;font-family:\"" + fontselect + "\"}#container{background-color:" + bgcolorpicker + ";text-align:center;}</style></head><body><div id=\"container\"><p>" + messagetextarea + "</p><img class=\"adapt-img\" src=\"" + imagelink + "\" width=\"600\"/></div></body></html>");
    wnd.print();
  }

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: '',
      subject: '',
      messagetextarea: '',
      fontselect: '',
      fontcolorpicker: '',
      bgcolorpicker: '',
      imagelink: ''
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
    let messagetextarea = this.state.messagetextarea;
    let fontselect = this.state.fontselect;
    let fontcolorpicker = this.state.fontcolorpicker;
    let bgcolorpicker = this.state.bgcolorpicker;
    let imagelink = this.state.imagelink;

    sendEmail(recipient, subject, messagetextarea, fontselect, fontcolorpicker, bgcolorpicker, imagelink);

    window.alert("Email Sent!");
  }

  previewHandler = (event) => {
    event.preventDefault();

    let messagetextarea = this.state.messagetextarea;
    let fontselect = this.state.fontselect;
    let fontcolorpicker = this.state.fontcolorpicker;
    let bgcolorpicker = this.state.bgcolorpicker;
    let imagelink = this.state.imagelink;
    
    preview(messagetextarea, fontselect, fontcolorpicker, bgcolorpicker, imagelink);
  }

  printHandler = (event) => {
    event.preventDefault();

    let messagetextarea = this.state.messagetextarea;
    let fontselect = this.state.fontselect;
    let fontcolorpicker = this.state.fontcolorpicker;
    let bgcolorpicker = this.state.bgcolorpicker;
    let imagelink = this.state.imagelink;
    
    print(messagetextarea, fontselect, fontcolorpicker, bgcolorpicker, imagelink);
  }

  render() {
    return (
    <div style={{paddingLeft : "25px"}}>
      <form onSubmit={this.formHandler}>
      <h1>Edit Template</h1>
      <div>
        <br></br>
      </div>
      Choose a Template:
      <br></br>
      <select name="chosentemplate" required>
        <option value="getwell">Get Well</option>
        <option value="teacherappreciation">Teacher Appreciation</option>
        <option value="gradannouncement">Graduation Announcement</option>
        <option value="savethedate">Save The Date</option>
        <option value="thankyou">Thank You</option>
        <option value="valentines">Valentines</option>
        <option value="bday">Happy Birthday</option>
        <option value="bmemo">Business Memo</option>
      </select>
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
      <textarea name="messagetextarea" rows="5" cols="50" placeholder="Type your message here!" required onChange={this.ChangeHandler}></textarea>
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
      <label>
          Image (Link from an image hosted online):
          <br></br>
          <input type="text" name="imagelink" required onChange={this.ChangeHandler} />
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
      </div>
    );
  }
}

export default MyForm;