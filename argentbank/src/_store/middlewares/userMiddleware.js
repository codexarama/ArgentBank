import axios from 'axios';

import { editSuccess, editFailure } from '../actions/userActions';

import {
  getValueFromSessionStorage,
  setValueToSessionStorage,
} from '../../utils/sessionStorage';

const baseURL = 'http://localhost:3001/api/v1/user';
// const baseURL = `${process.env.REACT_APP_API_URL}/api/v1/user`;

/**
 * PUT NEW USER NAME in API
 * @param   {string}  firstName   [new user firstName]
 * @param   {string}  lastName    [new user lastName]
 * @returns
 */
export function newProfile(firstName, lastName) {
  const token = getValueFromSessionStorage('TOKEN');

  return (dispatch) => {
    axios
      .put(
        `${baseURL}/profile`,
        { firstName, lastName },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        dispatch(editSuccess((firstName, lastName)));
        setValueToSessionStorage(
          'USER',
          response.data.body.user.firstName +
            ' ' +
            response.data.body.user.lastName
        );
      })
      .catch((error) => {
        dispatch(editFailure(error.message));
      });
  };
}
