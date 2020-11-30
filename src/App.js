import React from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css'
import Routes from './config/router'
import {Provider} from 'react-redux'
import {store} from './config/store'
import { theme } from './config/theme'

function App() {
  return (
    <Provider store ={store}> 
    <ThemeProvider theme={theme}>
      <Routes></Routes>
    </ThemeProvider>
    </Provider> 
  )
}

export default App
