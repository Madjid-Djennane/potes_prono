/* eslint-disable react/prop-types */
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('userToken') ? (
          <Component {...props} />
        ) : (
          <Redirect to='/'></Redirect>
        )
      }
    ></Route>
  )
}

/* PrivateRoute.prototype = {
  Component: PropTypes.any,
  component: PropTypes.any
} */

export default PrivateRoute
