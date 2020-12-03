import { SET_WEEK_GAMES } from '../actions/weekGames'

const initialState = {
  weekGamesValue: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_WEEK_GAMES:
      return {
        ...state,
        weekGamesValue: action.payload
      }

    default:
      return state
  }
}
