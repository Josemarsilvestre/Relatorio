import AsyncStorage from '@react-native-async-storage/async-storage';

import { SET_BLOCOS } from '../types';
import { STORAGE_KEYS3 } from '../../constants';
import store from '../index';

// Get bloco
export const getBloco = (onSuccess = () => {}, onError = () => {}) => {
  return async dispatch => {
    try {
      const blocosRes = await AsyncStorage.getItem(STORAGE_KEYS3.blocos);
      const blocos = blocosRes ? JSON.parse(blocosRes) : [];

      dispatch({
        type: SET_BLOCOS,
        payload: blocos,
      });
      onSuccess();
    } catch (err) {
      console.log(err);
      onError();
    }
  };
};

// Update bloco
export const updateBloco = (bloco, onSuccess = () => {}, onError = () => {}) => {
  return async dispatch => {
    try {
      const { blocos } = store.getState().bloco;
      const updatedBlocos = [...blocos].map(t => t.id === bloco.id ? bloco : t);
      await AsyncStorage.setItem(STORAGE_KEYS3.blocos, JSON.stringify(updatedBlocos));

      dispatch({
        type: SET_BLOCOS,
        payload: updatedBlocos,
      });
      onSuccess();
    } catch (err) {
      console.log(err);
      onError();
    }
  };
}