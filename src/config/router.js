import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from '../screens/home'
import NoMatch from '../components/noMatch'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='*' component={NoMatch}></Route>
      </Switch>
    </Router>
  )
}

export default Routes
