import React from 'react'
import styled from 'styled-components'
import { Flex_row_space_between } from '../../styles/flex-style'
import PropTypes from 'prop-types'
import Team from '../team'
import Bet from '../bet'
import BetResults from '../betResult'
import { useSelector } from 'react-redux'

const Game = props => {
  const weekGamesStatus = useSelector(
    state => state.weekGames.weekGamesValue.status
  )

  return weekGamesStatus === 'pending' ? (
    <GameStyle>
      <Flex_row_space_between width='50vw'>
        <Team data={props.game.firstTeam}></Team>
        <Vs>VS</Vs>
        <Team data={props.game.secondTeam}></Team>
      </Flex_row_space_between>
      <Bet game={props.game}></Bet>
    </GameStyle>
  ) : (
    <GameStyle>
      <Flex_row_space_between width='50vw'>
        <Team data={props.game.firstTeam}></Team>
        <Vs>VS</Vs>
        <Team data={props.game.secondTeam}></Team>
      </Flex_row_space_between>
      <BetResults game={props.game}></BetResults>
    </GameStyle>
  )
}

Game.propTypes = {
  game: PropTypes.any
}

const GameStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 15px;
  margin: 15px 0;

  @media (max-width: 900px) {
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const Vs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 50px;
  font-family: attack;

  @media (max-width: 1070) {
    font-size: 50px;
  }
`

export default Game
