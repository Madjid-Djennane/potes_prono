/*import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

import Signin from '../components/signin'
import { theme } from '../config/theme'

const submit = (event, loginState, setErrMessage, history) => {
  event.preventDefault()

  if (!loginState.email || !loginState.password) {
    setErrMessage('les champs ne doivent pas être vide !')
    return
  }
  if (!loginState.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
    setErrMessage('Email invalide !')
    return
  }
  if (loginState.password.length < 6) {
    setErrMessage('Le mot de passe doit contenir au moins 6 caractères')
    return
  }

  axios({
    method: 'POST',
    url: 'http://localhost:3003/api/v1/users/login',
    data: {
      email: loginState.email,
      password: loginState.password
    }
  })
    .then(res => {
      const token = res.data.data.token
      localStorage.setItem('userToken', token)
      history.push('/home')
    })
    .catch(err => {
      console.log(err)
      Swal.fire({
        title: 'Erreur',
        icon: 'error',
        text: 'Une erreur est survenue !'
      })
    })
}

const Login = () => {
  return (
    <div theme={theme}>
      <Signin submit={submit}></Signin>
    </div>
  )
}*/
import React, { useEffect } from 'react';
import '../App.css';

import lightTheme from "../theme/light";
import darkTheme from "../theme/dark";
import Container from "../theme/components/Container"
import { ThemeProvider } from "styled-components";
import { darkModeAction } from '../actions/config_action';
import Signin from '../components/signin'
import { theme } from '../config/theme'
import axios from 'axios'
import Swal from 'sweetalert2'

import { useSelector, useDispatch } from "react-redux";
import Header from '../components/header'

export const submit = (event, loginState, setErrMessage, history) => {
  event.preventDefault()

  if (!loginState.email || !loginState.password) {
    setErrMessage('les champs ne doivent pas être vide !')
    return
  }
  if (!loginState.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
    setErrMessage('Email invalide !')
    return
  }
  if (loginState.password.length < 6) {
    setErrMessage('Le mot de passe doit contenir au moins 6 caractères')
    return
  }

  axios({
    method: 'POST',
    url: 'http://localhost:3003/api/v1/users/login',
    data: {
      email: loginState.email,
      password: loginState.password
    }
  })
    .then(res => {
      const token = res.data.data.token
      localStorage.setItem('userToken', token)
      history.push('/home')
    })
    .catch(err => {
      console.log(err)
      Swal.fire({
        title: 'Erreur',
        icon: 'error',
        text: 'Une erreur est survenue !'
      })
    })
}

const Login = () => {
  const dispatch = useDispatch();
  const config = useSelector(state => state.config)

  useEffect(() => {
    if (!config.darkMode) {
      dispatch(darkModeAction(window.localStorage.getItem('theme')))
    }
  }, [config.darkMode, dispatch])



  return (
    <ThemeProvider theme={config.darkMode === "light" ? lightTheme : darkTheme}>
<Header></Header>

      <Container >
      <div theme={theme}>
      <Signin submit={submit}></Signin>
    </div>
      </Container>
    </ThemeProvider>
  );
}


export default Login
