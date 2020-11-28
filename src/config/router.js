import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from '../screens/home'
import NoMatch from '../components/noMatch'
import Login from '../screens/login'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route path='*' component={NoMatch}></Route>
        <Route path='*' component={Home}></Route>
      </Switch>
    </Router>
  )
}

export default Routes
