import React from 'react'

import Signin from '../components/signin'
import { theme } from '../config/theme'

const Login = () => {
  return(
    <div theme={theme}>
      <Signin></Signin>
    </div>
  )
}

export default Login