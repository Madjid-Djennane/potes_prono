import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Input, FormButton, Form, H1 } from '../../styles/style'
import { Flex_col_center, Flex_row_center } from '../../styles/felx-style'
import COLORS from '../../styles/color'
import { useHistory } from 'react-router-dom'

const NewUserForm = ({ submit }) => {
  const [newUserState, setNewUserState] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errMessage, setErrMessage] = useState('')

  const history = useHistory()

  return (
    <Flex_col_center>
      <Flex_row_center>
        <Form onSubmit={e => submit(e, newUserState, setErrMessage, history)}>
          <H1>Créer un compte</H1>
          <Input
            type='text'
            placeholder='Username'
            onChange={e =>
              setNewUserState({ ...newUserState, username: e.target.value })
            }
          />
          <Input
            type='text'
            placeholder='Email'
            onChange={e =>
              setNewUserState({ ...newUserState, email: e.target.value })
            }
          />
          <Input
            type='password'
            placeholder='Password'
            onChange={e =>
              setNewUserState({ ...newUserState, password: e.target.value })
            }
          />
          <Input
            type='password'
            placeholder='Confirm Password'
            onChange={e =>
              setNewUserState({
                ...newUserState,
                confirmPassword: e.target.value
              })
            }
          />
          <p>{errMessage}</p>
          <FormButton color={COLORS.btn_blue_royal}>Créer un compte</FormButton>
        </Form>
      </Flex_row_center>
    </Flex_col_center>
  )
}

NewUserForm.propTypes = {
  submit: PropTypes.any
}

export default NewUserForm
