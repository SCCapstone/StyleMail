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

    // Checks if user is logged-in or not
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
                        <Nav.Link as={Link} to="/customtemplates">Custom Templates</Nav.Link>
                        <Nav.Link as={Link} to="/help">Help</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="My Account" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
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
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand as={Link} to="/"> 
                    <img src="./stylemailicon.png" height="30px" width="30px" alt="User Icon"/>
                     StyleMail
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/help">Help</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
