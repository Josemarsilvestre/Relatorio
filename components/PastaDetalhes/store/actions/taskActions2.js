import AsyncStorage from '@react-native-async-storage/async-storage';

import { SET_TASKS2 } from '../types';
import { STORAGE_KEYS2 } from '../../constants';
import store from '../index';

// Get tasks
export const getTasks = (onSuccess = () => {}, onError = () => {}) => {
  return async dispatch => {
    try {
      const tasksRes = await AsyncStorage.getItem(STORAGE_KEYS2.tasks2);
      const tasks2 = tasksRes ? JSON.parse(tasksRes) : [];

      dispatch({
        type: SET_TASKS2,
        payload: tasks2,
      });
      onSuccess();
    } catch (err) {
      console.log(err);
      onError();
    }
  };
};

// Create task
export const createTask = (name, listId, lastname, data1, data2, assunto1, assunto2, texto, onSuccess = () => {}, onError = () => {}) => {
  return async dispatch => {
    try {
      const newTask = {
        name,
        listId,
        lastname, 
        data1, 
        data2, 
        assunto1, 
        assunto2,
        texto,
        id: `Interessado-${new Date().getTime()}`,
        completed: false,
      };

      const { tasks2 } = store.getState().task2;

      const tasksCopy = [...tasks2];
      tasksCopy.push(newTask);
      await AsyncStorage.setItem(STORAGE_KEYS2.tasks2, JSON.stringify(tasksCopy));

      dispatch({
        type: SET_TASKS2,
        payload: tasksCopy,
      });
      onSuccess(); 
    } catch (err) {
      console.log(err); 
      onError();
    }
  };
};

// Update task
export const updateTask = (task2, onSuccess = () => {}, onError = () => {}) => {
  return async dispatch => {
    try {
      const { tasks2 } = store.getState().task2;
      const updatedTasks = [...tasks2].map(t => t.id === task2.id ? task2 : t);
      await AsyncStorage.setItem(STORAGE_KEYS2.tasks2, JSON.stringify(updatedTasks));

      dispatch({
        type: SET_TASKS2,
        payload: updatedTasks,
      });
      onSuccess();
    } catch (err) {
      console.log(err);
      onError();
    }
  };
};

// Delete task
export const deleteTask = (id, onSuccess = () => {}, onError = () => {}) => {
  return async dispatch => {
    try {
      const { tasks2 } = store.getState().task2;
      const updatedTasks = [...tasks2].filter(t => t.id !== id);
      await AsyncStorage.setItem(STORAGE_KEYS2.tasks2, JSON.stringify(updatedTasks));

      dispatch({
        type: SET_TASKS2,
        payload: updatedTasks,
      });
      onSuccess();
    } catch (err) {
      console.log(err);
      onError();
    }
  };
};