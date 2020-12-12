import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Flex_col_center,
  Flex_col_space_around,
  Flex_row_center
} from '../../styles/flex-style'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const AntWeekBets = props => {
  const historyBet = useSelector(state => state.history.historyValue).find(
    hb => hb._id === props.id
  )
  const betsWon = historyBet.gamesList.filter(game => game.win).length
  const history = useHistory()
  const { t } = useTranslation()
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
      <Flex_col_space_around>
        <div>
          <Flex_row_center>
            <P>{t('startDate')}</P>
          </Flex_row_center>

          <Flex_row_center>{historyBet.startDate.slice(0, 10)}</Flex_row_center>
        </div>
        <div>
          <Flex_row_center>
            <P>{t('endDate')}</P>
          </Flex_row_center>

          <Flex_row_center>{historyBet.endDate.slice(0, 10)}</Flex_row_center>
        </div>
      </Flex_col_space_around>
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
  flex-wrap: wrap;

  position: relative;
  top: 0;
  justify-content: space-around;
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
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const P = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  maring: 0;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`

export default AntWeekBets
