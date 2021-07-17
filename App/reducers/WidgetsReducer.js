import {ACTIONS} from '../actions/WidgetsActions';

const INITIAL_STATE = {
  todos: [],
  notes: [],
};

const SectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_TODOS:
      return {...state, todos: action.payload};
    case ACTIONS.CHANGE_NOTES:
      return {...state, notes: action.payload};

    default:
      return state;
  }
};

export default SectionsReducer;
