import "./help.css"
import React from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer"
import { Link } from "react-router-dom"

class Help extends React.Component {
    render() {
        return (
        <div className="help-content">
            <NavBar /> 
          
            <div className="help-text-div">
                <h1 className="text-center help-title">FAQ - Frequently Asked Questions</h1>
                <br/>
                <h2 className="text-center help-sub-text"> What is StyleMail? </h2>
                <p className=""> StyleMail is a web app that allows you to pick from and customize stylized HTML and CSS email templates.
                Simply pick a style, fill out your text and adjust a few settings, then click a button to copy the template into your email client to
                continue editing. Whether you're looking to give a fun vibe for digital party invitations or a professional vibe for a business memo, spice up your emails with StyleMail!
                </p>  
                <br/>
                <h2 className="text-center help-sub-text"> Why do I need to make an account? </h2>
                <p className=""> We understand that you may not want to have to keep track of another username and password. However, even though
                    StyleMail is a free web application, we still ask all users' to create an account. This helps us to keep track of any StyleMail traffic to help
                    bring the best resources to you (our customers)! Through creating an account, you are also able to keep all of your created templates in one location
                    and have them easy accessible. If you have any questions referring to what information is being used from you, please refer to our 
                    <span> <Link style={{color:'#ba588f' }} to="/terms" target="_blank">Terms</Link> </span> and  
                    <span> <Link style={{color:'#ba588f'}} to="/privacy" target="_blank">Privacy</Link> </span> policies. 
                </p>
                <br/>
                <h2 className="text-center help-sub-text"> Why is StyleMail free? </h2>
                <p className=""> We are very thankful to be able to provide this resource to our customers at no cost. We have a few generous donors 
                    that are able to fund the cost of running this application. We want to continue to provide this resource to you for free as long as we can so that you can continue to 
                    make your own customers, friends, family, or businesses more effective. We are satisfied through helping you reach your own! If you are interested in becoming a sponsor, 
                    please feel free to <Link style={{color:'#ba588f' }} to="/contact" target="_blank">contact us</Link>.
                </p>
                <br></br>
                <br></br>
            </div>
        
            <Footer/>
        </div>
        );
    }
}

export default Help;