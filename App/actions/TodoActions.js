export const ACTIONS = {
  ADD_TODOS: 'add-todos',
  TOGGLE_TODO: 'toggle-todo',
  Delete_TODO: 'delete-todo',
};

export const addTodos = payload => ({
  type: ACTIONS.ADD_TODOS,
  payload: payload,
});

export const toggleTodo = payload => ({
  type: ACTIONS.TOGGLE_TODO,
  payload: payload,
});

export const deleteTodo = payload => ({
  type: ACTIONS.Delete_TODO,
  payload: payload,
});
