/* eslint-disable react/prop-types */
import React from 'react'
import { Flex_col, Flex_row_center } from '../../styles/flex-style'
import Game from '../game'
import { Title } from '../../styles/style'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const PreviousWeekBet = props => {
  const { t } = useTranslation()
  return (
    <Flex_col>
      <Flex_row_center>
        <Title>
          {t('betOf')} {props.weekGames.startDate.slice(0, 10)}
        </Title>
      </Flex_row_center>
      {props.weekGames.gamesList?.map(_game => (
        <div key={_game._id}>
          <Game game={_game}></Game>
        </div>
      ))}
    </Flex_col>
  )
}

PreviousWeekBet.prototype = {
  weekGames: PropTypes.any
}

export default PreviousWeekBet
