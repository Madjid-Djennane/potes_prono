import React from 'react'
import { Flex_col_center, Flex_row_center } from '../../styles/flex-style'
import { Title } from '../../styles/style'

const NoBets = () => {
  return (
    <Flex_col_center height='100vh'>
      <Flex_row_center>
        <Title>Aucun pari disponible pour le moment !</Title>
      </Flex_row_center>
    </Flex_col_center>
  )
}

export default NoBets
