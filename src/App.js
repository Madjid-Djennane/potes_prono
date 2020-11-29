import React from 'react'
import './App.css'
import Routes from './config/router'

import {Provider} from 'react-redux'
import {store} from './config/store'

function App() {
  <Provider store ={store}>
  return <Routes></Routes>
  </Provider>
}

export default App
