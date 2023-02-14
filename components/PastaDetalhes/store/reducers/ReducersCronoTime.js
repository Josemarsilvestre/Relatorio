import { SET_TIME } from '../types';

const initialState = {
  times: [
    {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  ],
};

const timesReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME:
      return { ...state, times: action.payload }
    default:
      return state;
  }
};

export default timesReducers;  