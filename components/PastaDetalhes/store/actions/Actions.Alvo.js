import AsyncStorage from '@react-native-async-storage/async-storage';

import { SET_ALVOS } from '../types';
import { STORAGE_KEYS4 } from '../../constants';
import store from '../index';

// Get bloco
export const getALvos = (onSuccess = () => {}, onError = () => {}) => {
  return async dispatch => {
    try {
      const alvosRes = await AsyncStorage.getItem(STORAGE_KEYS4.alvos);
      const alvos = alvosRes ? JSON.parse(alvosRes) : [];

      dispatch({
        type: SET_ALVOS,
        payload: alvos,
      });
      onSuccess();
    } catch (err) {
      console.log(err);
      onError();
    }
  };
};

// Update bloco
export const updateAlvo = (alvo, onSuccess = () => {}, onError = () => {}) => {
  return async dispatch => {
    try {
      const { alvos } = store.getState().alvo;
      const updatedAlvos = [...alvos].map(t => t.id === alvo.id ? alvo : t);
      await AsyncStorage.setItem(STORAGE_KEYS4.alvos, JSON.stringify(updatedAlvos));

      dispatch({
        type: SET_ALVOS,
        payload: updatedAlvos,
      });
      onSuccess();
    } catch (err) {
      console.log(err);
      onError();
    }
  };
}