import {combineReducers} from 'redux'

import score from './scores'

import config from './config_reducer';

export default combineReducers({
  score,
  config
})