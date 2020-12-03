import { INIT } from '../actions/bet'

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

    default:
      return state
  }
}
