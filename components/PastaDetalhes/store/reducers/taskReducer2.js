import { SET_TASKS2 } from '../types';

const initialState = {
  tasks2: [],
};

const taskReducer2 = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS2:
      return {
        tasks2: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer2;