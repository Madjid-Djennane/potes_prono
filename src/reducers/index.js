import { combineReducers } from 'redux'

import weekGames from './weekGames'
import bet from './bet'
import history from './history'

export default combineReducers({
  weekGames,
  bet,
  history
})
