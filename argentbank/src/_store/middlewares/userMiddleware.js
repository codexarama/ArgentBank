import axios from 'axios';

import { editSuccess, editFailure } from '../actions/userActions';

import { token, user } from '../../utils/storage';

import {
  setValueToSessionStorage,
  setValueToLocalStorage,
} from '../../utils/storage';

const baseURL = 'http://localhost:3001/api/v1/user';
// const baseURL = `${process.env.REACT_APP_API_URL}/api/v1/user`;

/**
 * PUT NEW USER NAME in API
 * @param   {string}  firstName   [new user firstName]
 * @param   {string}  lastName    [new user lastName]
 * @returns
 */
export function newProfile(firstName, lastName) {
  return (dispatch) => {
    axios
      .put(
        `${baseURL}/profile`,
        { firstName, lastName },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        dispatch(editSuccess((firstName, lastName)));

        console.log(sessionStorage.length);
        console.log(localStorage.length);

        sessionStorage.length !== 0
          ? setValueToSessionStorage(
              'USER',
              response.data.body.user.firstName +
                ' ' +
                response.data.body.user.lastName
            )
          : setValueToLocalStorage(
              'USER',
              response.data.body.user.firstName +
                ' ' +
                response.data.body.user.lastName
            );

        // setValueToSessionStorage(
        //   'USER',
        //   response.data.body.user.firstName +
        //     ' ' +
        //     response.data.body.user.lastName
        // );
      })
      .catch((error) => {
        dispatch(editFailure(error.message));
      });
  };
}
