import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Input, FormButton, Form, H1, ErrMsg } from '../../styles/style'
import { Flex_col_center, Flex_row_center } from '../../styles/flex-style'
import COLORS from '../../styles/color'
import { useHistory, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Signin = ({ submit }) => {
  const [loginState, setLoginState] = useState({ email: '', password: '' })
  const [errMessage, setErrMessage] = useState('')

  const history = useHistory()
  const { t } = useTranslation()

  return (
    <Flex_col_center height='95vh'>
      <Flex_row_center>
        <Form onSubmit={e => submit(e, loginState, setErrMessage, history, t)}>
          <H1>{t('signIn')}</H1>
          <Input
            type='text'
            placeholder='Email'
            onChange={e =>
              setLoginState({ ...loginState, email: e.target.value })
            }
          />
          <Input
            type='password'
            placeholder='Password'
            onChange={e =>
              setLoginState({ ...loginState, password: e.target.value })
            }
          />
          <ErrMsg>{errMessage}</ErrMsg>
          <FormButton color={COLORS.btn_blue_royal}>{t('logIn')}</FormButton>

          <Flex_row_center>
            <Link to='/new_user'>{t('signUp')}</Link>
          </Flex_row_center>
        </Form>
      </Flex_row_center>
    </Flex_col_center>
  )
}

Signin.propTypes = {
  submit: PropTypes.any
}

export default Signin
