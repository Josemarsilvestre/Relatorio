import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import listReducer from './reducers/listReducer';
import taskReducer from './reducers/taskReducer';
import listReducer2 from './reducers/listReducer2';
import taskReducer2 from './reducers/taskReducer2';
import reducerInforma from './reducers/Reducers.Informa'
import reducerAlvos from './reducers/Reducers.Alvos'
import timesReducers from './reducers/ReducersCronoTime'
import blocoTimesReducers from './reducers/Reducers.Bloco.Crono'
import reducerLanguages from './reducers/languageReducers'

const rootReducer = combineReducers({
  list: listReducer,
  task: taskReducer,
  list2: listReducer2,
  task2: taskReducer2,
  bloco: reducerInforma,
  alvo: reducerAlvos,
  time: timesReducers,
  blococrono: blocoTimesReducers,
  reducerLanguages
})

const store = createStore(rootReducer, applyMiddleware(thunk));
                                      
export default store