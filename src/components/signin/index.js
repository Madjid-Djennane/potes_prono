import React from 'react'
import styled from 'styled-components'
import { Input, Button } from '../../styles/style'
/*import { Flex_row_space_between } from '../../styles/felx-style'*/
import COLORS from '../../styles/color'


const Signin = () => {
  return (
      <StyledForm>
      <StyledSpan>Connexion</StyledSpan>
      <Input placeholder='Username' type='text'></Input>
      <Input placeholder='Password' type='password'></Input>
      <br></br>
      <Button color={COLORS.btn_bg}>Click</Button>

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
  margin: 100px 600px 100px 600px;
  height: 400px;
`


export default Signin;