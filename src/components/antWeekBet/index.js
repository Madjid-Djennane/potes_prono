import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex_col_center } from '../../styles/flex-style'
import { useHistory } from 'react-router-dom'

const AntWeekBets = props => {
  const historyBet = useSelector(state => state.history.historyValue).find(
    hb => hb._id === props.id
  )
  const betsWon = historyBet.gamesList.filter(game => game.win).length
  const history = useHistory()

  return (
    <WeekBetStyle
      onClick={() =>
        history.push({
          pathname: '/previousBet',
          state: { id: historyBet._id }
        })
      }
    >
      <Logo src='/assets/pl.png'></Logo>
      <Flex_col_center>
        <Score
          color={
            betsWon <= 7
              ? 'red'
              : betsWon > 7 && betsWon <= 10
              ? '#999'
              : 'green'
          }
        >
          {betsWon} / 14
        </Score>
      </Flex_col_center>
    </WeekBetStyle>
  )
}

AntWeekBets.propTypes = {
  id: PropTypes.string
}

const WeekBetStyle = styled.div`
  background: white;
  text-decoration: none;
  color: #444;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  min-height: 100%;
  width: 80%;

  position: relative;
  top: 0;
  justify-content: space-between;
  margin-bottom: 35px;

  transition: all 0.1s ease-in;
  &:hover {
    top: -2px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`

const Logo = styled.img`
  width: 256px;
  height: 256px;
  @media (max-width: 768px) {
    width: 64px;
    height: 64px;
  }
`
const Score = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: ${props => props.color};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

export default AntWeekBets
