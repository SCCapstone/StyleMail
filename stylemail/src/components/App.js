import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import Settings from "./Settings"
import ForgotPassword from "./ForgotPassword"
import CustomTemplates from "./CustomTemplates"
import LogOut from "./LogOut"
import NavBar from "./NavBar"
import SampleTemplates from "./SampleTemplates"
import SendLog from "./SendLog"
import EditTemplateSample from "./EditTemplateSample"
import EditTemplateCustom from "./EditTemplateCustom"
import Help from "./Help"
import Privacy from "./Privacy"
import Terms from "./Terms"
import Contact from "./Contact"

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
              <PrivateRoute path ="/settings" component={Settings} />
              <PrivateRoute path ="/customtemplates" component={CustomTemplates} />
              <PrivateRoute path ="/sampletemplates" component={SampleTemplates} />
              <PrivateRoute path ="/edittemplatesample" component={EditTemplateSample} />
              <PrivateRoute path ="/edittemplatecustom" component={EditTemplateCustom} />
              <PrivateRoute path ="/help" component={Help} />
              <PrivateRoute path ="/privacy" component={Privacy} />
              <PrivateRoute path ="/terms" component={Terms} />
              <PrivateRoute path ="/contact" component={Contact} />
              <PrivateRoute path ="/sendlog" component={SendLog} />
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
