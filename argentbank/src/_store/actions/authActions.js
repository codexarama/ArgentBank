import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './types';
import {
  setValueToLocalStorage,
  removeValueFromLocalStorage,
} from '../../utils/localStorage';

import axios from 'axios';

/**
 * LOGIN ACTION
 *
 * @param   {string}  email     [user email]
 * @param   {string}  password  [user password]
 *
 * @return  {object}            [token, user first name, errors]
 */
export const login = ({ email, password }) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:3001/api/v1/user/login`, {
        email,
        password,
      })
      .then((response) => {
        dispatch(loginSuccess(response.data.body));
        setValueToLocalStorage('TOKEN', response.data.body.token);
        setValueToLocalStorage('USER', response.data.body.user.firstName);
        window.location.replace(`/profile`);
      })
      .catch((error) => {
        dispatch(loginFailure(error.message)); 
      });
  };
};

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: {
    error,
  },
});

/**
 * LOGOUT ACTION
 *
 * @return  {function}  [remove data, redirect to home page]
 */
export const logoutUser = () => {
  return (dispatch) => {
    dispatch(logout());
    removeValueFromLocalStorage('TOKEN');
    removeValueFromLocalStorage('USER');
    window.location.replace(`/`);
  };
};

const logout = () => ({
  type: LOGOUT,
});
