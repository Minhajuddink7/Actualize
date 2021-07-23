import {ACTIONS} from '../actions/TodoActions';

const INITIAL_STATE = [];

const TodoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODOS:
      return {todos: [...state.todos, action.payload]};
    case ACTIONS.TOGGLE_TODO:
      return {todos: [...state.todos, action.payload]};

    default:
      return state;
  }
};

export default TodoReducer;
