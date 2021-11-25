import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from './_types';

/**
 * function loginSuccess
 *
 * @param   {object}  user
 *
 * @return  {string}  type      user login success action
 * @return  {object}  payload   user data
 */
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user
});

/**
 * function loginFailure
 *
 * @param   {object}  error
 *
 * @return  {string}  type      login failure action
 * @return  {object}  payload   error types on API request
 */
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: {
    error,
  },
});

/**
 * function logoutSuccess
 *
 * @return  {string}  type      user logout success action
 */
export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
