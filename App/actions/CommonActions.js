export const ACTIONS = {
  CHANGE_USER_STATE: 'change-user-state',
};

export const changeUserState = payload => ({
  type: ACTIONS.CHANGE_USER_STATE,
  payload: payload,
});
