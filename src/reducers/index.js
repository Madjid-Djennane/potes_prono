import { combineReducers } from 'redux'

import weekGames from './weekGames'
import bet from './bet'

export default combineReducers({
  weekGames,
  bet
})
