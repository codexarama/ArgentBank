import axios from 'axios';
import { loginSuccess, loginFailure, logoutSuccess } from '../actions/authActions';
import {
  setValueToLocalStorage,
  removeValueFromLocalStorage,
} from '../../utils/localStorage';

const baseURL = 'http://localhost:3001/api/v1/user';
// const baseURL = `${process.env.REACT_APP_API_URL}/api/v1/user`;

/**
 * LOGIN SERVICE
 * fetch JWT & user data
 * handle user authentication
 * @param   {string}  email     [user email]
 * @param   {string}  password  [user password]
 * @returns {object}  response  [data || undefined || error]
 */
export function login(email, password) {
  return (dispatch) => {
    axios
      .post(`${baseURL}/login`, {
        email,
        password,
      })
      .then((response) => {
        dispatch(loginSuccess(response.data.body));
        setValueToLocalStorage('TOKEN', response.data.body.token);
        // setValueToLocalStorage('USER', response.data.body.user.firstName);
        setValueToLocalStorage('USER', response.data.body.user.firstName + ' ' + response.data.body.user.lastName);
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
 * @return  {function}  [remove data from local storage, redirect to home page]
 */
export function logout() {
  return (dispatch) => {
    dispatch(logoutSuccess());
    removeValueFromLocalStorage('TOKEN');
    removeValueFromLocalStorage('USER');
    window.location.replace(`/`);
  };
}
