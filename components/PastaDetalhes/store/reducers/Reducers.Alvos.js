import { SET_ALVOS } from '../types'

const initialState = {
  alvos: [
    {
      hour: "",
      value: null,
      segunda: false,
      terca: false,
      quarta: false,
      quinta: false,
      sexta: false,
      sabado: false,
      domingo: false,
      texto: "",
      seg: "",
      ter: "",
      quin: "",
      quar: "",
      sext: "",
      sab: "",
      dom: ""
    }]
};       

function reducerAlvos(state = initialState , action) {
  switch (action.type) {
    case SET_ALVOS:
      return { ...state, alvos: action.payload };              
    default:
      return state;
  }
}

export default reducerAlvos;