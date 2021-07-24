import {ACTIONS} from '../actions/TodoActions';

const INITIAL_STATE = {todos: []};

const TodoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODOS:
      return {todos: [...state.todos, action.payload]};
    case ACTIONS.TOGGLE_TODO:
      const filteredTodos = state.todos.filter(t => t.id !== action.payload.id);
      if (action.payload.completed)
        return {todos: [...filteredTodos, action.payload]};
      else return {todos: [action.payload, ...filteredTodos]};
    case ACTIONS.Delete_TODO:
      const updatedList = state.todos.filter(t => t.id !== action.payload.id);

      return {todos: updatedList};

    default:
      return state;
  }
};

export default TodoReducer;
