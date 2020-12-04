import React, { useEffect }  from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css'
import Routes from './config/router'
import { Provider } from 'react-redux'
import { store } from './config/store'
import Header from '../src/components/header'
import { useSelector } from 'react-redux'
import { darkModeAction } from '../src/actions/config_action'
import lightTheme from '../src/theme/light'
import darkTheme from '../src/theme/dark'
import Container from '../src/theme/components/Container'
import { useDispatch } from 'react-redux'
import './config/translations'
const AppWrapper = () => {
  return (
    <Provider store={store}> 
      <App /> 
    </Provider>
  )
}

function App() {
  
  const dispatch = useDispatch()
  const config = useSelector(state => state.config)

  useEffect(() => {
    if (!config.darkMode) {
      dispatch(darkModeAction(window.localStorage.getItem('theme')))
    }
  }, [config.darkMode, dispatch])
  return (
      <ThemeProvider theme={config.darkMode === 'light' ? lightTheme : darkTheme}>
        <Container>
        <Header></Header>
          <Routes></Routes>
        </Container>
      </ThemeProvider>
  )
}

export default AppWrapper
