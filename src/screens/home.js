import React from 'react'
import { Input, Button } from '../styles/style'
import { Flex_row_space_between } from '../styles/felx-style'
import COLORS from '../styles/color'

const home = () => {
  return (
    <Flex_row_space_between>
      <div>Home</div>
      <Input type='text' />
      <Button color={COLORS.btn_red}>Click</Button>
    </Flex_row_space_between>
  )
}

export default home
