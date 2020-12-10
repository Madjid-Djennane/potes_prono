/* eslint-disable react/prop-types */
import React from 'react'
import { Flex_col, Flex_row_center } from '../../styles/flex-style'
import ConfirmBet from '../confirmBet'
import Game from '../game'
import { Title } from '../../styles/style'
import PropTypes from 'prop-types'

const WeekBet = props => {
  return (
    <Flex_col>
      <Flex_row_center>
        <Title>
          {props.weekGames.status === 'pending'
            ? 'Les paris sont ouverts'
            : 'Les résultats du dernier pari'}
        </Title>
      </Flex_row_center>
      {props.weekGames.gamesList?.map(_game => (
        <div key={_game._id}>
          <Game game={_game}></Game>
        </div>
      ))}
      {props.weekGames.status === 'pending' ? (
        <ConfirmBet></ConfirmBet>
      ) : (
        <div></div>
      )}
    </Flex_col>
  )
}

WeekBet.prototype = {
  weekGames: PropTypes.any
}

export default WeekBet
