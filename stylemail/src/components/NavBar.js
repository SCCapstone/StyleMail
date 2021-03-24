/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Dashboard.css"
import React from "react"
import { useAuth } from "../contexts/AuthContext"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
/**
 * Public & Private Visability
 * Provides both user and authenticated user a navigation bar with restricted links
 */
export default function NavBar() {
    const { logout } = useAuth()
    const history = useHistory()
    var login = useAuth();

    async function handleLogout() {
    
        try {
          await logout()
          history.push("/login")
          NavBar.state.loggedIn = true;
        } catch(e) {
          console.log(e.message);
        }
    }
    
    if(login) {
        /*
        return (   
                   <div className="topnav">
                       <Link className="mobile-link" style={{color:'white'}} to="/">Dashboard</Link>
                       <Link style={{color:'white'}} to="/sampletemplates">Sample Templates</Link>
                       <Link style={{color:'white'}} to="/customtemplates">Custom Templates</Link>
                       <Link style={{color:'white'}} to="/sendlog">Send Log</Link>
                       <Link style={{color:'white'}} to="/help">Help</Link>
                       <Link style={{color:'white'}} to="/contact">Contact</Link>
                       <Link style={{color:'white'}} to="/privacy">Privacy Policy</Link>
                       <Link style={{color:'white'}} to="/terms">Terms of Use</Link>
                       <Link style={{color:'white'}} to="/settings">Settings</Link>
                       <a style={{color:'white'}} onClick={handleLogout}>Sign Out</a>
                   </div>
        )
        */
       return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand as={Link} to="/"> 
                    <img src="./stylemailicon.png" height="30px" width="30px" alt="User Icon"/>
                     StyleMail
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/sampletemplates">Sample Templates</Nav.Link>
                        <Nav.Link as={Link} to="/help">Help</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/Privacy">Privacy</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="My Account" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/customtemplates">My Templates</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/sendlog">Send Log</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
       )
    }
    else {
        return (
            <div className="topnav">
                <a href="https://stylemail.app/index">Home</a>
                <a href="https://run.stylemail.app">Login</a>
                <a href="https://run.stylemail.app">Signup</a>
                <a href="https://stylemail.app/help">Help</a>
                <a href="https://stylemail.app/contact">Contact</a>
                <a href="https://stylemail.app/privacy">Privacy Policy</a>
                <a href="https://stylemail.app/terms">Terms of Use</a>
            </div>
        )
    }
}
