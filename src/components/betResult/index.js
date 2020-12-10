/* eslint-disable react/prop-types */
import React from 'react'
import { BetStyle } from '../../styles/style'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BetResults = props => {
  return (
    <BetStyle>
      <div>
        <Title>Score du match: </Title>
        <Res>
          {props.game.firstTeam.name} : {props.game.score.firstTeamRes}
        </Res>
        <Res>
          {props.game.secondTeam.name} : {props.game.score.secondTeamRes}
        </Res>
      </div>

      <div>
        <Title>Résulat du pari: </Title>
        <Res color={props.game.win ? 'green' : 'red'}>
          {props.game.win ? 'Gagné' : 'Perdu'}
        </Res>
      </div>
    </BetStyle>
  )
}

BetResults.prototype = {
  game: PropTypes.any
}

const Title = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 10px 0 15px 0;
  text-align: center;
`

const Res = styled.p`
  color: ${props => props.color};
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 5px 0;
  text-align: center;
`

export default BetResults
