import AsyncStorage from '@react-native-async-storage/async-storage';

import { SET_TIME } from '../types';
import { STORAGE_KEYS5 } from '../../constants';
import store from '../index';

// Get times
export const getTimes = (onSuccess = () => {}, onError = () => {}) => {
  return async dispatch => {
    try {
      const timesRes = await AsyncStorage.getItem(STORAGE_KEYS5.times);
      const times = timesRes ? JSON.parse(timesRes) : [];

      dispatch({
        type: SET_TIME,
        payload: times,
      });
      onSuccess();
    } catch (err) {
      console.log(err);
      onError();
    }
  };
};

// Update time
export const updatedTime = (time, onSuccess = () => {}, onError = () => {}) => {
  return async dispatch => {
    try {
      const { times } = store.getState().time;
      const updatedTimes = [...times].map(t => t.id === time.id ? time : t);
      await AsyncStorage.setItem(STORAGE_KEYS5.times, JSON.stringify(updatedTimes));

      dispatch({
        type: SET_TIME,
        payload: updatedTimes,
      });
      onSuccess(); 
    } catch (err) {
      console.log(err);
      onError();
    }
  };
};

// Delete time
export const deleteTimes = (id, onSuccess = () => {}, onError = () => {}) => {
  return async dispatch => {
    try {
      const { times } = store.getState().time;
      const updatedTimes = [...times].filter(t => t.id !== id);
      await AsyncStorage.setItem(STORAGE_KEYS5.times, JSON.stringify(updatedTimes));

      dispatch({
        type: SET_TIME,
        payload: updatedTimes,
      });
      onSuccess();
    } catch (err) {0
      console.log(err);
      onError();
    }
  };
};