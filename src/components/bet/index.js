import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Radio, BetStyle } from '../../styles/style'
import {
  Flex_col_center,
  Flex_row_space_between
} from '../../styles/flex-style'
import { setBet } from '../../actions/bet'

const Bet = props => {
  const dispatch = useDispatch()
  return (
    <BetStyle>
      <Flex_row_space_between>
        <Radio
          type='radio'
          value='1'
          name={props.game._id}
          onClick={() =>
            dispatch(
              setBet({
                game: props.game._id,
                user_bet: 1
              })
            )
          }
        />
        <Flex_col_center>
          <Span>{props.game.firstTeam.name}</Span>
        </Flex_col_center>
      </Flex_row_space_between>

      <Flex_row_space_between>
        <Radio
          type='radio'
          value='2'
          name={props.game._id}
          onClick={() =>
            dispatch(
              setBet({
                game: props.game._id,
                user_bet: 2
              })
            )
          }
        />
        <Flex_col_center>
          <Span>{props.game.secondTeam.name}</Span>
        </Flex_col_center>
      </Flex_row_space_between>

      <Flex_row_space_between>
        <Radio
          type='radio'
          value='0'
          name={props.game._id}
          onClick={() =>
            dispatch(
              setBet({
                game: props.game._id,
                user_bet: 2
              })
            )
          }
        />
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

const Span = styled.span`
  margin-right: 10px;
`

export default Bet
