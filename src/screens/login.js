import React from 'react'
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
  // localStorage.removeItem('userToken')
  return (
    <div theme={theme}>
      <Signin submit={submit}></Signin>
    </div>
  )
}

export default Login
