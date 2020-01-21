import { combineReducers } from 'redux';
import addReducer from './addReducer';

export default combineReducers({
  list: addReducer
});