//import React, { useRef, useState } from 'react';

import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import Profile from "./Profile"
import ForgotPassword from "./ForgotPassword"
import SavedTemplates from "./SavedTemplates"
import LogOut from "./LogOut"
import NavBar from "./NavBar"


// Private route is only accessable from authorized users

/*
 * Builds main app functionality
 * Uses React Router library to route traffic to specific components
 * Only authenticated traffic is grated access to specific paths
 */

function App() {

   <NavBar />

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >    

      <div className="w-100" style={{ maxWidth: "3000px" }}>

      

        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path ="/profile" component={Profile} />
              <PrivateRoute path ="/savedtemplates" component={SavedTemplates} />
              <PrivateRoute path ="/logout" component={LogOut} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />   
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}
export default App;
