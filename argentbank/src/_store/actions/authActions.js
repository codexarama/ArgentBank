import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from './_types';

export const loginSuccess = (token, user) => ({
  type: LOGIN_SUCCESS,
  payload: token, user
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: {
    error,
  },
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
