import AsyncStorage from '@react-native-async-storage/async-storage';
import { SET_BLOCOCRONO } from '../types';
import { STORAGE_KEYS6 } from '../../constants';
import store from '../index';

// Get blococronos
export const getBlocoCronos = (onSuccess = () => {}, onError = () => {}) => {
  return async dispatch => {
    try {
      const blococronosRes = await AsyncStorage.getItem(STORAGE_KEYS6.blococronos);
      const blococronos = blococronosRes ? JSON.parse(blococronosRes) : [];

      dispatch({
        type: SET_BLOCOCRONO,
        payload: blococronos,
      });
      onSuccess();
    } catch (err) {
      console.log(err);
      onError();
    }
  };
};

// Update time
export const updatedBlocoCrono = (blococrono, onSuccess = () => {}, onError = () => {}) => {
  return async dispatch => {
    try {
      const { blococronos } = store.getState().blococrono;
      const updatedBlocoCronos = [...blococronos].map(t => t.id === blococrono.id ? blococrono : t);
      await AsyncStorage.setItem(STORAGE_KEYS6.blococronos, JSON.stringify(updatedBlocoCronos));

      dispatch({
        type: SET_BLOCOCRONO,
        payload: updatedBlocoCronos,
      }); 
      onSuccess(); 
    } catch (err) {
      console.log(err);
      onError();
    }
  };
};