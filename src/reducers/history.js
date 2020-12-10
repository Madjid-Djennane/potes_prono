import { SET_HISTORY } from '../actions/history'

const initialState = {
  historyValue: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HISTORY:
      return {
        ...state,
        historyValue: action.payload
      }

    default:
      return state
  }
}
