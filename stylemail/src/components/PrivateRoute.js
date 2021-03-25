import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
/**
 * Custom configuration for React Router
 * Verifies if user is authenticated before routing to private module
 */
export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}