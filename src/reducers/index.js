import { combineReducers } from 'redux'

import weekGames from './weekGames'
import bet from './bet'
import history from './history'
import config from './config_reducer'

export default combineReducers({
  weekGames,
  bet,
  history,
  config
})
