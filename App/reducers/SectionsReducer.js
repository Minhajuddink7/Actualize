import {ACTIONS} from '../actions/SectionsActions';

const INITIAL_STATE = {
  introspection: {widgets: []},
  transcendence: [],
  lifePurpose: [],
  hobbies: [],
};

const SectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_INTROSPECTION:
      return {...state, introspection: action.payload};
    case ACTIONS.CHANGE_TRANSCENDENCE:
      return {...state, transcendence: action.payload};
    case ACTIONS.CHANGE_LIFE_PURPOSE:
      return {...state, lifePurpose: action.payload};
    case ACTIONS.CHANGE_HOBBIES:
      return {...state, hobbies: action.payload};

    default:
      return state;
  }
};

export default SectionsReducer;
