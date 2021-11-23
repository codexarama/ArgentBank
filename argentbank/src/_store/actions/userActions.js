import { EDIT_SUCCESS, EDIT_FAILURE } from './_types';

export const editSuccess = (firstName, lastName) => ({
  type: EDIT_SUCCESS,
  payload: firstName, lastName,
});

export const editFailure = (error) => ({
  type: EDIT_FAILURE,
  payload: error,
});
