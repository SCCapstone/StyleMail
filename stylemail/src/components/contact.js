import "./contact.css"
import React from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer"
class Contact extends React.Component {
  render() {
    return (
      <div className="contact-content">
        <NavBar/>
          <div className="contact-text-div">
            <h1 className="text-center contact-title">Spill the Beans... </h1>
            <br/>
            <h2 className="text-center contact-sub-text">We want to hear from you! How can we serve you better? </h2>
            <br/>

            <form id="contact-form" action="https://formspree.io/f/xnqobnbp" method="POST">
                <div class="form-row">
                  <div class="form-group col-md-7">
                    <label for="email">Name</label>
                    <input type="text" class="form-control" name="email" id="name" placeholder="Name" required/>
                  </div>
                  <div class="form-group col-md-5">
                    <label for="subject">Phone Number</label>
                    <input type="tel" class="form-control" name="pnumber" id="pnumber" placeholder="012-345-6789"/>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="subject">Inquiry Type</label>
                    <select name="subject" id="subject"class="form-control" required>
                      <option value="" selected>Choose one..</option>
                      <option value="Help">Help</option>
                      <option value="Questions">Questions</option>
                      <option value="Feature Suggestion">Feature Suggestion</option>
                      <option value="Partnerships">Partnerships</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea class="form-control" name="message" id="message" rows="3" placeholder="Your message.." required></textarea>
                </div>
                <div className="text-center">
                  <button id="contact-submit-btn" type="submit" class="btn btn-primary">Send Message</button>
                </div>
              </form>
          </div>
        <Footer/>
      </div>
    );
  }
}
export default Contact;