import React from 'react'
import styled from 'styled-components'

const Signin = () => {
  return (
    <StyledForm>
      <StyledSpan>Connexion</StyledSpan>
      <SigninInput placeholder='Username' type='text'></SigninInput>
      <SigninInput placeholder='Password' type='password'></SigninInput>
      <SigninInput type='submit'></SigninInput>
    </StyledForm>
  )
}

const StyledSpan = styled.span`
font-size: 25px;
  font-weight: 600;
  text-align: center;
  line-height: 100px;
  user-select: none;
  border-radius: 15px 15px 0 0;
  color:#097F61;
`

const StyledForm = styled.form`
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
  background: #05B7DD;
  border-radius: 15px;
  box-shadow:  10px 15px 20px rgba(0,0,0,0.1);
  margin: 100px 500px 100px 500px;
  height: 400px;
`

const SigninInput = styled.input`
margin: 6px 0px;
border-radius: 12px;
height: 35px;
color: #278F81;
border:none;
`
export default Signin;