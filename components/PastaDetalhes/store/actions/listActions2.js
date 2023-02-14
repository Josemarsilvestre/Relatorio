import AsyncStorage from '@react-native-async-storage/async-storage';

import { SET_LISTS2, SET_ACTIVE_LIST_ID2 } from '../types';
import { STORAGE_KEYS2 } from '../../constants';
import store from '../index';

// Get lists action
export const getLists = (onSuccess = () => {}, onError = () => {}) => {
  return async dispatch => {
    try {
      const listsRes = await AsyncStorage.getItem(STORAGE_KEYS2.lists2);
      const lists2 = listsRes ? JSON.parse(listsRes) : [];

      dispatch({
        type: SET_LISTS2,
        payload: lists2,
      });
      onSuccess();
    } catch (err) {
      console.log(err);
      onError();
    }
  };
};

// Create list action
export const createList = (name, onSuccess = () => {}, onError = () => {}) => {
  return async dispatch => {
    try {
      const newList = {
        name,
        id: `list-${new Date().getTime()}`,
      };

      const { lists2 } = store.getState().list2;

      const listsCopy = [...lists2];
      listsCopy.push(newList);
      await AsyncStorage.setItem(STORAGE_KEYS2.lists2, JSON.stringify(listsCopy));

      dispatch({
        type: SET_LISTS2,
        payload: listsCopy,
      });
      onSuccess();
    } catch (err) {
      console.log(err);
      onError();
    }
  };
};

// Delete list
export const deleteList = (id, onSuccess = () => {}, onError = () => {}) => {
  return async dispatch => {
    try {
      const { lists2 } = store.getState().list2;

      const listsCopy = [...lists2];
      const filteredLists = listsCopy.filter(l => l.id !== id);
      await AsyncStorage.setItem(STORAGE_KEYS2.lists2, JSON.stringify(filteredLists));

      dispatch({
        type: SET_LISTS2,
        payload: filteredLists,
      });
      onSuccess();
    } catch (err) {
      console.log(err);
      onError();
    }
  };
};

// Set active list id
export const setActiveListId = (id) => {
  return {
    type: SET_ACTIVE_LIST_ID2,
    payload: id,
  };
};