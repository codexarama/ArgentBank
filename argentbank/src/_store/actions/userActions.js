import {
    GET_USER,
    EDIT_PROFILE,
  } from './_types';

  export const getUser = (user) => ({
    type: GET_USER,
    payload: user,
  });

  export const editProfile = (firstName, lastName) => ({
    type: EDIT_PROFILE,
    payload: { firstName, lastName },
  });
