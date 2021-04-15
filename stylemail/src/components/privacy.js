import "./privacy.css"
import React from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer"
import { Link } from "react-router-dom"


class Privacy extends React.Component {
    render() {
      return (
        <div className="privacy-content">
          <NavBar/> 
        
          <div className="privacy-text-div">
            <h1 className="text-center privacy-title">Privacy Policy</h1>
            <p className="w3-center w3-large"> At StyleMail, we respect the privacy rights of our users and recognize the importance of protecting the personal information we collect about you. 
                Our Privacy Policy is designed to help you understand what information we collect and how we use and share that information. This Privacy Policy applies to our Websites and StyleMail editor. 
                It is also important to us that you know the <Link style={{color:'black' }} to="/terms" target="_blank">Terms of Use.</Link> Please make sure to read all the following information.</p>
           
            <h2 className="text-center privacy-sub-text"> Information We Collect </h2>
            <p> <b> Registration, Company and Contact Information.</b> We collect information about you when you (a) register to use the Services and (b) otherwise provide contact information to us via 
              email, mail, social networks, or through our editor. This information you provide may include your email address, first name, last name, photo, preferred language, Facebook ID, phone number, company name, website 
              address, company logo, industry type, company contact details, social networks details, company localization, and preferred currency. </p>
        
            <p> <b>Technical, Usage and Location Information.</b> We automatically collect information on how you interact with the StyleMail, such as the IP address from which you access the account, date and time, information about your browser, operating system and computer 
              or device, pages viewed and items clicked. We may also collect location information, including location information automatically provided by your computer or device. We use cookies and similar technologies to collect
              some of this information. </p>
        
            <p> <b>Third Party Platforms.</b> We may collect information when you interact with our advertisements and other content on third-party sites or platforms, such as social networking sites. This may include information such as «Likes», profile information 
              gathered from social networking sites or the fact that you viewed or interacted with our content. </p>
        
              <h2 className="text-center privacy-sub-text">How this Information is Used  </h2>
            
              <p> To provide, maintain and improve the StyleMail editor and our other products and services, including to operate certain features and functionality of the StyleMail
                (for example, by remembering your information so that you will not have to re-enter it during this or subsequent visits);
                To process your inquiries and otherwise deliver customer service; 
                To control unauthorized use or abuse of the StyleMail and our other products and services, or otherwise detect, investigate or prevent activities that may violate our policies or be illegal; 
                To analyze trends, administer or optimize the StyleMail, monitor usage or traffic patterns (including to track users’ movements around the StyleMail gather demographic information about our user base as a whole); 
                To communicate directly with you, including by sending you newsletters, promotions and special offers or information about new products and services; and
                In the manner described to you at the time of collection or as otherwise described in this Privacy Policy.
              </p>
            
              <h2 className="text-center privacy-sub-text"> Your Controls and Choices  </h2>
            
              <p> <b>Opt-Outs.</b> We may provide you with the opportunity to «opt-out» of having your personal information used for certain purposes when we ask for this information. If you decide to opt-out, we may not be able to provide certain features of the StyleMail to you. <br/>
            
              <b>Communication Preferences.</b> If you no longer wish to receive our newsletter and promotional communications, you may opt-out of receiving them by following the instructions included for these communications. Please note, however, that you may be unable to opt-out of certain service-related communications. <br/>
            
              <b>Blocking Cookies.</b> You can remove or block certain cookies using the settings in your browser but the StyleMail may cease to function properly if you do so. <br/>
            
              <b>How We Respond to Do Not Track Signals.</b> Your Web browser may have a «do not track» setting which, when enabled, causes your browser to send a do not track HTTP header file or «signal» to each site you visit. At present, the StyleMail does not respond to this type of signal. <br/>
            
              <b>Changes to the Privacy Policy</b> We reserve the right to change our Privacy Policy at any time. If we make changes, we will post them and will indicate on this page the policy’s new effective date. If we make material changes to this policy, we will notify you by email or through notice on the StyleMail.
              </p>
        
            <h2 className="text-center privacy-sub-text">Your Consent</h2>
        
            <p> <b>BY USING OUR SITE, YOU ACCEPT OUR PRIVACY POLICY.</b> <br/>
                If you have any questions about our Privacy Policy, feel free to <Link style={{color:'#ba588f'}} to="/contact" target="_blank">contact us.</Link>
            </p>
            </div>

          <Footer/>
        </div>
    );
  }
}
    
export default Privacy;