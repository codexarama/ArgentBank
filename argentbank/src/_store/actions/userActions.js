import { EDIT_SUCCESS, EDIT_FAILURE } from './_types';

/**
 * function editSuccess
 *
 * @param   {string}  firstName   user first name
 * @param   {string}  lastName    user last name
 *
 * @return  {string}  type        user edit name action
 * @return  {object}  payload     user first name, auser last name
 */
export const editSuccess = (firstName, lastName) => ({
  type: EDIT_SUCCESS,
  payload: firstName, lastName,
});

/**
 * function editFailure
 *
 * @param   {object}  error
 *
 * @return  {string}  type      edit failure action
 * @return  {object}  payload   error types on API request
 */
export const editFailure = (error) => ({
  type: EDIT_FAILURE,
  payload: error,
});
