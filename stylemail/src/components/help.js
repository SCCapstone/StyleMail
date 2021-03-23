import React from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer"

class help extends React.Component {
render() {
    return (
        <div>
          <NavBar /> 
          
            <div>
                <h1 className="w3-center">FAQ - Frequently Asked Questions</h1>

                <h2 className="w4-center"> What is StyleMail? </h2>
                <p className="w3-center w3-large"> StyleMail is a web app that allows you to pick from and customize stylized HTML and CSS email templates.
                Simply pick a style, fill out your text and adjust a few settings, then click a button to copy the template into your email client to
                continue editing. Whether you're looking to give a fun vibe for digital party invitations or a professional vibe for a business memo, spice up your emails with StyleMail!
                </p>  
                
                <h2 className="w4-center"> Why do I need to make an account? </h2>
                <p className="w3-center w3-large"> We understand that you may not want to have to keep track of another username and password. However, even though
                    StyleMail is a free web application, we still ask all users' to create an account. This helps us to keep track of any StyleMail traffic to help
                    bring the best resources to you (our customers)! Through creating an account, you are also able to keep all of your created templates in one locaiton
                    and have them easy accessible. If you have any questions referring to what information is being used from you, please refer to our <a href="https://stylemail.app/terms">Terms</a> and 
                     <a href="https://stylemail.app/privacy"> Privacy</a> policies. 
                </p>

                <h2 className="w4-center"> Why is StyleMail free? </h2>
                <p className="w3-center w3-large"> We are very thankful to be able to provide this resource to our customers at no cost. We have a few generous donors 
                    that are able to fund the cost of running this application. We want to continue to provide this resource to you for free as long as we can so that you can continue to 
                    make your own customers, friends, family, or businesses more effective. We are satisfied through helping you reach your own! If you are interested in becoming a sponsor, 
                    please feel free to <a href="https://stylemail.app/contact">contact us</a>.
                </p>
            </div>
        
        <Footer></Footer> 
        </div>
    );
 }
}

export default help;