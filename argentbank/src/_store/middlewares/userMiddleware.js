import axios from 'axios';
import { editProfile } from '../actions/userActions';
import {
  getValueFromLocalStorage,
  setValueToLocalStorage,
} from '../../utils/localStorage';

const baseURL = 'http://localhost:3001/api/v1/user';
// const baseURL = `${process.env.REACT_APP_API_URL}/api/v1/user`;

/**
 * PUT NEW USER NAME in API
 * @param   {string}  firstName   [new user firstName]
 * @param   {string}  lastName    [new user lastName]
 * @returns
 */
export function newProfile(firstName, lastName) {
  getValueFromLocalStorage('TOKEN');
  getValueFromLocalStorage('USER');
  return (dispatch) => {
    axios
      .put(
        `${baseURL}/profile`,
        { headers: { Authorization: `Bearer ${'TOKEN'}` } },
        { firstName, lastName }
      )
      .then((response) => {
        dispatch(editProfile(response.data.body));
        setValueToLocalStorage('TOKEN', response.data.body.token);
        setValueToLocalStorage('USER', response.data.body.user);
        window.location.replace(`/profile`);
      })
      .catch((error) => console.error(error.message));
  };
}

/////////////////////////////
// import axios from 'axios';
// import { getUser, editProfile } from '../actions/userActions';
// import {
//   getValueFromLocalStorage,
//   setValueToLocalStorage,
// } from '../../utils/localStorage';

// const baseURL = 'http://localhost:3001/api/v1/user';
// // const baseURL = `${process.env.REACT_APP_API_URL}/api/v1/user`;

// /**
//  * GET USER DATA
//  * fetch user data
//  * @param   {object}  data      [user data]
//  * @returns {object}  response  [data || undefined || error]
//  */
// export function userData() {
//   return (dispatch) => {
//     getValueFromLocalStorage('TOKEN');
//     getValueFromLocalStorage('USER');
//     axios
//       .post(`${baseURL}/profile`, {
//         headers: { Authorization: `Bearer ${'TOKEN'}` },
//       })
//       .then((response) => {
//         dispatch(getUser(response.data.body));
//       })
//       .catch((error) => console.error(error.message));
//   };
// }

// // /**
// //  * GET USER DATA
// //  * fetch user data
// //  * @param   {object}  data      [user data]
// //  * @returns {object}  response  [data || undefined || error]
// //  */
// // export function userData() {
// //   return (dispatch) => {
// //     axios
// //       .post(`${baseURL}/profile`, {headers: { Authorization: `Bearer ${token}` }})
// //       .then((response) => {
// //         dispatch(getUser(response.data.body));
// //         setValueToLocalStorage('TOKEN', response.data.body.token);
// //         setValueToLocalStorage('USER', response.data.body.user);
// //       })
// //       .catch((error) => console.error(error.message));
// //   };
// // }

// /**
//  * PUT NEW USER NAME in API
//  * @param   {string}  firstName   [new user firstName]
//  * @param   {string}  lastName    [new user lastName]
//  * @returns
//  */
// export function newProfile(firstName, lastName) {
//   return (dispatch) => {
//     axios
//       .put(
//         `${baseURL}/profile`,
//         { headers: { Authorization: `Bearer ${'TOKEN'}` } },
//         { firstName, lastName }
//       )
//       .then((response) => {
//         dispatch(editProfile(response.data.body));
//         setValueToLocalStorage('TOKEN', response.data.body.token);
//         setValueToLocalStorage('USER', response.data.body.user);
//         window.location.replace(`/profile`);
//       })
//       .catch((error) => console.error(error.message));
//   };
// }
