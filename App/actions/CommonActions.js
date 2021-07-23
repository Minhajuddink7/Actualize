export const ACTIONS = {
  CHANGE_USER_STATE: 'change-user-state',
  CHANGE_WIDGET_FORM_STATE: 'change-widget-form-state',
};

export const changeUserState = payload => ({
  type: ACTIONS.CHANGE_USER_STATE,
  payload: payload,
});
export const changeWidgetFormState = payload => ({
  type: ACTIONS.CHANGE_WIDGET_FORM_STATE,
  payload: payload,
});
