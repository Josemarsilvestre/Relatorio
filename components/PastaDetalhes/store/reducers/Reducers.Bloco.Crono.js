import { SET_BLOCOCRONO } from '../types';

const initialState = {
  blococronos: [
    {
      time: 0,
      isRunning: false,
      show: false,
      play: true,
      results: []
    }
  ]
};

const blocoTimesReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_BLOCOCRONO:
      return { ...state, blococronos: action.payload }
    default:
      return state;
  }
};

export default blocoTimesReducers;     