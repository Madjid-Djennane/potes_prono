import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from '../screens/home'
import NoMatch from '../components/noMatch'
import Login from '../screens/login'
import CreateUser from '../screens/create-user'
import PrivateRoute from '../utils/privateRoute'

import Test from '../screens/test'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <PrivateRoute path='/home' component={Home}></PrivateRoute>
        <PrivateRoute path='/test' component={Test}></PrivateRoute>
        <Route path='/new_user' component={CreateUser}></Route>
        <Route path='*' component={NoMatch}></Route>
      </Switch>
    </Router>
  )
}

export default Routes
