import React from 'react'
import { Input, Button } from '../styles/style'
import { Flex_row_space_between } from '../styles/felx-style'
import COLORS from '../styles/color'

import {useTranslation} from 'react-i18next'
//import '../../src/App.css'


const home = () => {
  const { t, i18n }= useTranslation()
  return (
    <Flex_row_space_between>
      <div>Home</div>
      <Input type='text' />
      <button onClick={()=>i18n.changeLanguage('fr')}>Fr</button>
      <button onClick={()=>i18n.changeLanguage('en')}>En</button>
  <p>{t('utilisateur')}</p>
      <Button color={COLORS.btn_red}>Click</Button>
    </Flex_row_space_between>
  )
}

export default home
