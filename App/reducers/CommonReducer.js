import {ACTIONS} from '../actions/CommonActions';

const INITIAL_STATE = {
  isLoggedIn: false,
};

const CommonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_USER_STATE:
      return {...state, isLoggedIn: action.payload};

    default:
      return state;
  }
};

export default CommonReducer;
