export const ACTIONS = {
  ADD_TODOS: 'add-todos',
  TOGGLE_TODO: 'toggle-todo',
};

export const addTodos = payload => ({
  type: ACTIONS.ADD_TODOS,
  payload: payload,
});

export const toggleTodo = payload => ({
  type: ACTIONS.TOGGLE_TODO,
  payload: payload,
});
