import {combineReducers} from 'redux';
import CommonReducer from './CommonReducer';
import SectionsReducer from './SectionsReducer';

export default combineReducers({
  common: CommonReducer,
  sections: SectionsReducer,
});
