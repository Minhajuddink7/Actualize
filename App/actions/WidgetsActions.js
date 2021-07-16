export const ACTIONS = {
  CHANGE_TODOS: 'change-todos',
  CHANGE_NOTES: 'change-notes',
};

export const changeTodos = payload => ({
  type: ACTIONS.CHANGE_TODOS,
  payload: payload,
});
export const changeNotes = payload => ({
  type: ACTIONS.CHANGE_NOTES,
  payload: payload,
});
