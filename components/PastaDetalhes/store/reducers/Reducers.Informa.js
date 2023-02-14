import { SET_BLOCOS } from '../types'

const initialState = {
  blocos: [
    {
      hour: "",
      minuts: "",
      pub: "",
      video: "",
      revi: "",
      studient: "",
      texto: "",
      check1: false
    }],
};       

function reducerInforma(state = initialState , action) {
  switch (action.type) {
    case SET_BLOCOS:
      return { ...state, blocos: action.payload };              
    default:
      return state;
  }
}

export default reducerInforma;