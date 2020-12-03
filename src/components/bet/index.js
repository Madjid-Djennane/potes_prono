import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Radio } from '../../styles/style'
import {
  Flex_col_center,
  Flex_row_space_between
} from '../../styles/flex-style'

const Bet = props => {
  return (
    <BetStyle>
      <Flex_row_space_between>
        <Radio type='radio' value='1' name={props.game._id} />
        <Flex_col_center>
          <Span>{props.game.firstTeam.name}</Span>
        </Flex_col_center>
      </Flex_row_space_between>

      <Flex_row_space_between>
        <Radio type='radio' value='2' name={props.game._id} />
        <Flex_col_center>
          <Span>{props.game.secondTeam.name}</Span>
        </Flex_col_center>
      </Flex_row_space_between>

      <Flex_row_space_between>
        <Radio type='radio' value='0' name={props.game._id} />
        <Flex_col_center>
          <Span>Match Nul</Span>
        </Flex_col_center>
      </Flex_row_space_between>
    </BetStyle>
  )
}

Bet.propTypes = {
  game: PropTypes.any
}

const BetStyle = styled.div`
  width: 250px;
  background: white;
  text-decoration: none;
  color: #444;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100%;
  border-radius: 5%;
  position: relative;
  top: 0;

  @media (max-width: 768px) {
    margin-top: 10px;
    flex-direction: row;
    width: 100%;
  }
`

const Span = styled.span`
  margin-right: 10px;
`

export default Bet
