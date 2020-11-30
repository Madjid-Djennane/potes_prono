import {INCREMENT_SCORES} from '../actions/scores'

const initialState ={
  score: 0
}

export default (state = initialState, action)=>{
  switch(action.type){
    case INCREMENT_SCORES:
      return{
        ...state,
        score: state.score+1
      }
    default:
      return state  
  }
}
