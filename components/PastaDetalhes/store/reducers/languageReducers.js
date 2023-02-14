import { SET_LANGUAGE } from '../types'
import * as Localization from 'expo-localization';

const initialState = {
    languages: `${Localization.locale}`,
}

function reducerLanguages(state = initialState, action) {
  switch (action.type) {
    case SET_LANGUAGE:
        return { ...state, languages: action.payload };
    default:
        return state;
  }
}

export default reducerLanguages;