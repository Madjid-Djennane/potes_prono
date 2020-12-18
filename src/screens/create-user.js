/* eslint-disable no-unused-vars */
import React from 'react'
import NewUserForm from '../components/new-user-form'
import axios from 'axios'
import Swal from 'sweetalert2'

const submit = (event, newUserState, setErrMessage, history, t) => {
  event.preventDefault()

  if (!newUserState.email || !newUserState.password) {
    setErrMessage(t('notEmpty'))
    return
  }
  if (
    !newUserState.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
  ) {
    setErrMessage(t('invalidEmail'))
    return
  }
  if (newUserState.password.length < 6) {
    setErrMessage(t('minPass'))
    return
  }

  if (newUserState.password !== newUserState.confirmPassword) {
    setErrMessage(t('diffPass'))
    return
  }
  axios({
    method: 'POST',
    url: `${process.env.REACT_APP_PROD_URI}api/v1/users/new_user`,
    data: {
      username: newUserState.username,
      email: newUserState.email,
      password: newUserState.password
    }
  })
    .then(res => {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Compte crée !'
      }).then(() => {
        history.push('/')
      })
    })
    .catch(err => {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Une erreur est survenue !'
      })
    })
}

const CreateUser = () => {
  return (
    <div>
      <NewUserForm submit={submit}></NewUserForm>
    </div>
  )
}

export default CreateUser
