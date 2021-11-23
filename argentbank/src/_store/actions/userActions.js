import {
    EDIT_SUCCESS,
    EDIT_FAILURE,
  } from './_types';

  // export const editSuccess = (user) => ({
  //   type: EDIT_SUCCESS,
  //   payload: { user },
  // });

  export const editSuccess = (token, user, firstName, lastName) => ({
    type: EDIT_SUCCESS,
    payload: token, user, firstName, lastName,
  });

  // export const editSuccess = (user, token, firstName, lastName) => ({
  //   type: EDIT_SUCCESS,
  //   payload: { user, token, firstName, lastName },
  // });

  export const editFailure = (error) => ({
    type: EDIT_FAILURE,
    payload: error,
  });
