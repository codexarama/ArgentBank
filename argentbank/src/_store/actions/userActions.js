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
 * @return  {object}            [token, user full name, errors]
 */
export const login = ({ email, password }) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:3001/api/v1/user/login`, {
        email,
        password,
      })
      .then((result) => {
        dispatch(loginSuccess(result.data.body));
        setValueToLocalStorage('TOKEN', result.data.body.token);

        // setValueToLocalStorage('USER', result = {
        //   firstName: result.data.body.user.firstName,
        //   lastName: result.data.body.user.lastName,
        // });

        // ok
        setValueToLocalStorage('USER', result.data.body.user.firstName);
        // setValueToLocalStorage('USER', result.data.body.user.firstName + " " + result.data.body.user.lastName);
        window.location.replace(`/profile`);
      })
      .catch((error) => {
        dispatch(loginFailure(error.message));
      });
  };
};

// const loginSuccess = (firstName, lastName) => ({
//   type: LOGIN_SUCCESS,
//   payload: { firstName, lastName },
// });

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
 * @return  {function}  [remove data, redirect to login fom]
 */
export const logoutUser = () => {
  return (dispatch) => {
    dispatch(logout());
    removeValueFromLocalStorage('TOKEN');
    removeValueFromLocalStorage('USER');
    window.location.replace(`/`);
    // window.location.replace(`/login`);
  };
};

const logout = () => ({
  type: LOGOUT,
});
