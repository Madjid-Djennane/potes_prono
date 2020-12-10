export const INIT = 'INIT'
export const SET_BET = 'SET_BET'

export const initBet = value => ({
  type: INIT,
  payload: value
})

export const setBet = value => ({
  type: SET_BET,
  payload: value
})
