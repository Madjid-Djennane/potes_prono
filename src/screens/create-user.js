/* eslint-disable no-unused-vars */
import React from 'react'
import NewUserForm from '../components/new-user-form'
import axios from 'axios'
import Swal from 'sweetalert2'

const submit = (event, newUserState, setErrMessage, history) => {
  event.preventDefault()

  if (!newUserState.email || !newUserState.password) {
    setErrMessage('les champs ne doivent pas être vide !')
    return
  }
  if (
    !newUserState.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
  ) {
    setErrMessage('Email invalide !')
    return
  }
  if (newUserState.password.length < 6) {
    setErrMessage('Le mot de passe doit contenir au moins 6 caractères')
    return
  }

  if (newUserState.password !== newUserState.confirmPassword) {
    setErrMessage('Mots de passe différents')
    return
  }
  axios({
    method: 'POST',
    url: 'http://localhost:3003/api/v1/users/new_user',
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
