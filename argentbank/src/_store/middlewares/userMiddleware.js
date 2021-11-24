import axios from 'axios';
import { profileURL } from '../../utils/apiUrls';

import { editSuccess, editFailure } from '../actions/userActions';

import { token } from '../../utils/storage';

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
        dispatch(
          editSuccess(
            response.data.body.user.firstName,
            response.data.body.user.lastName
          )
        );
      })
      .catch((error) => {
        dispatch(editFailure(error.message));
      });
  };
}
