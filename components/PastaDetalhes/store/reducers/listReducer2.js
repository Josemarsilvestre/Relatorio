import { SET_LISTS2, SET_ACTIVE_LIST_ID2 } from '../types';

const initialState = {
  lists2: [],
  activeListId: '',
};

const listReducer2 = (state = initialState, action) => {
  switch (action.type) {
    case SET_LISTS2:
      return {
        ...state,
        lists2: action.payload,
      };
    case SET_ACTIVE_LIST_ID2:
      return {
        ...state,
        activeListId: action.payload,
      };
    default:
      return state; 
  }
};

export default listReducer2