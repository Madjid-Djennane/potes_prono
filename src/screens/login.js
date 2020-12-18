/* eslint-disable no-unused-vars */
import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

import Signin from '../components/signin'
import { theme } from '../config/theme'

const submit = (event, loginState, setErrMessage, history, t) => {
  event.preventDefault()

  if (!loginState.email || !loginState.password) {
    setErrMessage(t('notEmpty'))
    return
  }
  if (!loginState.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
    setErrMessage(t('invalidEmail'))
    return
  }
  if (loginState.password.length < 6) {
    setErrMessage(t('minPass'))
    return
  }

  axios({
    method: 'POST',
    url: 'https://agitated-tesla-4e977b.netlify.app/api/v1/users/login',
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
      Swal.fire({
        title: 'Erreur',
        icon: 'error',
        text: 'Une erreur est survenue !'
      })
    })
}

const Login = () => {
  localStorage.removeItem('userToken')
  return (
    <div theme={theme}>
      <Signin submit={submit}></Signin>
    </div>
  )
}

export default Login
