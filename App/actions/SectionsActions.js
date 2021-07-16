export const ACTIONS = {
  CHANGE_INTROSPECTION: 'change-introspection',
  CHANGE_TRANSCENDENCE: 'change-transcendence',
  CHANGE_LIFE_PURPOSE: 'change-life-purpose',
  CHANGE_HOBBIES: 'change-hobbies',
};

export const changeIntrospection = payload => ({
  type: ACTIONS.CHANGE_INTROSPECTION,
  payload: payload,
});
export const changeTranscendence = payload => ({
  type: ACTIONS.CHANGE_TRANSCENDENCE,
  payload: payload,
});
export const changeLifePurpose = payload => ({
  type: ACTIONS.CHANGE_LIFE_PURPOSE,
  payload: payload,
});
export const changeHobbies = payload => ({
  type: ACTIONS.CHANGE_HOBBIES,
  payload: payload,
});
