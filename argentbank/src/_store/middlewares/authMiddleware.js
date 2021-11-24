import axios from 'axios';
import { loginURL } from '../../utils/apiUrls';

import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
} from '../actions/authActions';

import {
  setValueToSessionStorage,
  setValueToLocalStorage,
  clearLocalStorage,
  clearSessionStorage,
} from '../../utils/storage';

/**
 * LOGIN SERVICE
 * fetch JWT & user data
 * handle user authentication
 * @param   {string}  email     [user email]
 * @param   {string}  password  [user password]
 * @returns {object}  response  [data {token, user first name, user last name} || undefined || error]
 */
export function login(email, password, rememberMe) {
  return (dispatch) => {
    axios
      .post(loginURL, {
        email,
        password,
      })
      .then((response) => {
        dispatch(loginSuccess(response.data.body));

        if (rememberMe) {
          setValueToLocalStorage('TOKEN', response.data.body.token);
          setValueToLocalStorage(
            'USER',
            response.data.body.user.firstName +
              ' ' +
              response.data.body.user.lastName
          );
        }

        if (!rememberMe) {
          setValueToSessionStorage('TOKEN', response.data.body.token);
          setValueToSessionStorage(
            'USER',
            response.data.body.user.firstName +
              ' ' +
              response.data.body.user.lastName
          );
        }

        window.location.replace(`/profile`);
      })
      .catch((error) => {
        dispatch(loginFailure(error.message));
      });
  };
}

/**
 * LOGOUT SERVICE
 * handle user disconnection
 * @return  {function}  [remove data from local && session storage, redirect to home page]
 */
export function logout() {
  return (dispatch) => {
    dispatch(logoutSuccess());

    clearSessionStorage();
    clearLocalStorage();

    window.location.replace(`/`);
  };
}
