import "./contact.css"
import React from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer"

class Contact extends React.Component {
    render() {
        return (
            <div>
              <NavBar /> 
            
            <div>

                <h1 className="w3-center">Spill the Beans... </h1>
                <h2 className="w3-center w3-large">We want to hear from you! How can we serve you better? </h2>
                <br></br>

                <div>
                <form action="https://formspree.io/f/xnqobnbp" method="POST">
                  <p>Could you tell us why you're contacting us?<span>   </span><select className="w3-input w3-border" name="Inquiry Type">
                    <option value="Help">Help</option>
                    <option value="Questions">Questions</option>
                    <option value="Feature Suggestion">Feature Suggestion</option>
                    <option value="Partnerships">Partnerships</option>
                  </select></p>

                  <p> Name - (Required) </p>
                  <input type="text" placeholder="What's your name?" required name="Name"/><br></br><br></br>
                  <p>Email Address - (Required) </p>
                  <input type="text" placeholder="What's your email address?" required name="Email"/><br></br><br></br>
                  <p>Telephone Number - (Required) </p>
                  <input type="text" placeholder="What's your phone number?" required name="Phone Number"/><br></br><br></br>
                  <p>Message - (Required)</p>
                  <textarea placeholder="Type your message here..." rows="4" cols="50" required name="Message"></textarea>
                <p><br></br>
                    <button className="w3-button w3-white" type="submit" value="Send">
                      <i className="fa fa-paper-plane"></i> Send Message
                    </button>
                  </p>

                  
                </form>
              </div>
            </div>
            
            <Footer></Footer> 
            </div>
        );
     }
    }
    
    export default Contact;