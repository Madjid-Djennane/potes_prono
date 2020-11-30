import React from 'react'
import { /* Input, */ Button } from '../styles/style'
import { Flex_row_center } from '../styles/felx-style'
import COLORS from '../styles/color'
import axios from 'axios'

const check = () => {
  axios({
    method: 'GET',
    url: 'http://localhost:3003/'
  })
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
}

import {useTranslation} from 'react-i18next'
//import '../../src/App.css'


const home = () => {
  const { t, i18n }= useTranslation()
  return (

    <Flex_row_center>
      {/* <div>Home</div>
      <Input type='text' /> */}
      <Button color={COLORS.btn_red} onClick={check}>
        Click
      </Button>
    </Flex_row_center>
  )
}

export default home
