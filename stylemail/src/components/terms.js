import "./terms.css"
import React from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer"
import { Link } from "react-router-dom"


class Terms extends React.Component {
    render() {
        return (
            <div className="terms-content">
              <NavBar/> 
              
                <div className="terms-text-div">
                    <h1 className="text-center terms-title">Terms of Use</h1>
                    <p className="w3-center w3-large"> Thanks for using StyleMail. Please read these Terms carefully. By using StyleMail or signing up for an account, you’re agreeing to these Terms, 
                    which will result in a legal agreement between you and StyleMail. We’ll start with the basics, including a few definitions that should help you understand these Terms. StyleMail
                    is an online email template editor offered through the URL StyleMail.email that allows you to, among other things, create, edit, and manage certain email templates and/or order email 
                    templates creation. StyleMail is a South Carolina company whose legal name is StyleMail Inc. StyleMail has employees, independent contractors, and representatives. As a customer of the 
                    Service or a representative of an entity that’s a customer of the Service, you’re a member according to this Agreement. These Terms of Use define the terms and conditions under which you’re allowed to use the Service in accordance with the Agreement, and 
                    how we’ll treat your account while you’re a Member. If you don’t agree to these Terms, you must immediately discontinue your use of the Service. If you have any questions about our Terms, feel free to
                    <span> <Link style={{color:'#ba588f' }} to="/contact" target="_blank">contact us</Link></span>.
                    </p>

                    <h2 className="text-center terms-sub-text">Term</h2>

                    <p> When you sign up for the Service and agree to these Terms, the Agreement between you and StyleMail is formed, and the term of the Agreement will begin. 
                    The Term will continue for as long as you have a StyleMail account or until you or we terminate the Agreement in accordance with these Terms, whichever happens first. 
                    Entering your email address and clicking the «Sign Up» button (or creating an account using the social network services, like Facebook) means that you’ve officially 
                    «signed» and accepted the Terms. If you sign up for the Service on behalf of a company or other entity, you represent and warrant that you have the authority to accept
                    these Terms and enter into the Agreement on its behalf.
                    </p>

                    <h2 className="text-center terms-sub-text">Closing your Account</h2>

                    <p> You or StyleMail may terminate the Agreement at any time and for any reason by terminating your Stripo account or giving notice to the other party. We may suspend the 
                    Service to you at any time, with or without cause. We won’t refund or reimburse you in any other situation, including if your account is suspended or terminated for cause,
                    like a breach or any violation of the Agreement. If your account is inactive for 24 or more months, we may terminate the account. Once your account is terminated, you acknowledge and agree 
                    that we may permanently delete your account and all the data associated with it, including your email templates. Email addresses are unique and can only be used once. If your account has been
                    terminated, the email address will no longer be available for use on any future accounts and cannot be reclaimed.
                    </p>

                    <h2 className="text-center terms-sub-text">Changes</h2>

                    <p> We may change any of the Terms by posting revised Terms of Use on our Website and/or by notifying you of the new Terms by sending an email to the last email address you gave us or displaying 
                      prominent notice within the Service. Unless you terminate your account within 10 days, the new Terms will be effective immediately and apply to any continued or new use of the Service. We may 
                      change the Website, the Service, or any features of the Service at any time, and we may discontinue the Website, the Service, or any features of the Service at any time
                    </p>

                    <h2 className="text-center terms-sub-text">Account and Password</h2>

                    <p> You’re responsible for keeping your account email address and password confidential. You’re also responsible for any account that you have access to and any activity occurring in such account 
                      (other than activity that StyleMail is directly responsible for that isn’t performed in accordance with your instructions), whether or not you authorized that activity. You’ll immediately notify 
                      us of any unauthorized access or use of your accounts. We’re not responsible for any losses due to stolen or hacked passwords that are caused by or result from your negligence. We don’t have access
                      to your current password, and for security reasons, we may only provide you with instructions on how to reset your password. We have the right to update any of your contact information in your account 
                      for billing purposes. In addition, you represent and warrant that all information you provide to us when you establish an account, and when you access and use the Service, is and will remain complete and accurate.
                    </p>

                    <h2 className="text-center terms-sub-text">Account Disputes</h2>

                    <p> We don’t know the inner workings of your organization or the nature of your personal relationships. You won’t request access to or information about an account that’s not yours, and you’ll resolve any account-related 
                    disputes directly with the other party. We decide who owns an account based on the content in that account, and if multiple people or entities are identified in the content, then we’ll rely on the contact and profile information 
                    listed for that account. In cases where differing contact and profile information is present, we’ll require you to resolve the matter through proper channels outside of StyleMail. <br/>
                    When a dispute is identified, we may suspend any account associated with the dispute, including disabling login capabilities, to protect the security and privacy of the data held within the account.
                    </p>

                    <h2 className="text-center terms-sub-text">Privacy Policy</h2>
                <p>
                Your privacy is important to us. Please read our  <span> <Link style={{color:'#ba588f'}} to="/privacy" target="_blank">Privacy Policy</Link> </span>
                 for information regarding how we collect, use, and disclose your Content and personal information and protect your privacy when you use the Service.
                </p>

                </div>
            
            <Footer></Footer> 
            </div>
        );
     }
    }
    
    export default Terms;