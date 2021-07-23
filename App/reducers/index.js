import {combineReducers} from 'redux';
import CommonReducer from './CommonReducer';
import SectionsReducer from './SectionsReducer';
import TodoReducer from './TodoReducer';

export default combineReducers({
  common: CommonReducer,
  sections: SectionsReducer,
  todos: TodoReducer,
});
