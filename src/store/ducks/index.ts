import { combineReducers } from 'redux';

import exampleReducer from './example.duck';
import todoReducer from './todos.duck';

export default combineReducers({
  exampleReducer,
  todoReducer,
});
