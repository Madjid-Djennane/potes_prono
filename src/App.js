import React from 'react'
import './App.css'
import Routes from './config/router'
//import Header from '../src/components/header'
//rany test
import {Provider} from 'react-redux'
import {store} from './config/store'

function App() {
  //<Provider store ={store}>
  return<Provider store ={store}> 
  <Routes></Routes>
  </Provider>
}

export default App
