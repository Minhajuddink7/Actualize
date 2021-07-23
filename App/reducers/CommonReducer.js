import {ACTIONS} from '../actions/CommonActions';

const INITIAL_STATE = {
  isLoggedIn: false,
  widgetFormOpen: false,
};

const CommonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_USER_STATE:
      return {...state, isLoggedIn: action.payload};
    case ACTIONS.CHANGE_WIDGET_FORM_STATE:
      return {...state, widgetFormOpen: action.payload};

    default:
      return state;
  }
};

export default CommonReducer;
