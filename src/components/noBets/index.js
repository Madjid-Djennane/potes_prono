import React from 'react'
import { Flex_col_center, Flex_row_center } from '../../styles/flex-style'
import { Title } from '../../styles/style'
import { useTranslation } from 'react-i18next'

const NoBets = () => {
  const { t } = useTranslation()
  return (
    <Flex_col_center height='100vh'>
      <Flex_row_center>
        <Title>{t('noBet')}</Title>
      </Flex_row_center>
    </Flex_col_center>
  )
}

export default NoBets
