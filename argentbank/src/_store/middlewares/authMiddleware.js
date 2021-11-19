import axios from 'axios';
import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
} from '../actions/authActions';
// SESSION STORAGE
// NE FONCTIONNE PAS
import {
  setValueToSessionStorage,
  clearSessionStorage,
} from '../../utils/sessionStorage';
import {
  setValueToLocalStorage,
  clearLocalStorage,
} from '../../utils/localStorage';

const baseURL = 'http://localhost:3001/api/v1/user';
// const baseURL = `${process.env.REACT_APP_API_URL}`;

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
      .post(`${baseURL}/login`, {
        email,
        password,
      })
      .then((response) => {
        // rememberMe // NE RENVOIE QUE LA 1e OCCURRENCE
        //   ? ((setValueToLocalStorage('USER', response.data.body.user.firstName)) && (setValueToLocalStorage('TOKEN', response.data.body.token)))
        //   : ((setValueToSessionStorage('USER', response.data.body.user.firstName)) && (setValueToSessionStorage('TOKEN', response.data.body.token)));
        //   // ? (setValueToLocalStorage('TOKEN', response.data.body.token) && setValueToLocalStorage('USER', response.data.body.user.firstName))
        //   // : (setValueToSessionStorage('TOKEN', response.data.body.token) && setValueToSessionStorage('USER', response.data.body.user.firstName));

        dispatch(loginSuccess(response.data.body));

        if (rememberMe) {
          setValueToLocalStorage('TOKEN', response.data.body.token);
          // setValueToLocalStorage('USER', response.data.body.user.firstName);
          setValueToLocalStorage(
            'USER',
            response.data.body.user.firstName +
              ' ' +
              response.data.body.user.lastName
          );
        }

        if (!rememberMe) {
          setValueToSessionStorage('TOKEN', response.data.body.token);
          // setValueToSessionStorage('USER', response.data.body.user.firstName);
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
