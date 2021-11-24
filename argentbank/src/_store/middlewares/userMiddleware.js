import axios from 'axios';
import { profileURL } from '../../utils/apiUrls';

import { editSuccess, editFailure } from '../actions/userActions';

import { token } from '../../utils/storage';

import {
  setValueToSessionStorage,
  setValueToLocalStorage,
} from '../../utils/storage';

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
        profileURL,
        { firstName, lastName },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        sessionStorage.length !== 0
          ? setValueToSessionStorage(
              'USER',
              `${response.data.body.firstName} ${response.data.body.lastName}`
            )
          : setValueToLocalStorage(
              'USER',
              `${response.data.body.firstName} ${response.data.body.lastName}`
            );

        window.location.reload();

        dispatch(
          editSuccess(
            firstName,
            lastName
          )
        );
      })
      .catch((error) => {
        dispatch(editFailure(error.message));
      });
  };
}
