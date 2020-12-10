import { INIT } from '../actions/bet'
import { SET_BET } from '../actions/bet'

const initialState = {
  betValue: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT:
      return {
        ...state,
        betValue: action.payload
      }

    case SET_BET:
      return {
        ...state,
        betValue: {
          weekGames: state.betValue.weekGames,
          bets: state.betValue.bets.map(bet => {
            if (bet.game === action.payload.game) {
              return action.payload
            }
            return bet
          })
        }
      }

    default:
      return state
  }
}
