import { combineReducers } from 'redux'

import weekGames from './weekGames'
import bet from './bet'
import config from './config_reducer'

export default combineReducers({
  weekGames,
  bet,
  config
})
