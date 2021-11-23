import axios from 'axios';
import { editSuccess, editFailure } from '../actions/userActions';
import {
  getValueFromSessionStorage,
  setValueToSessionStorage,
} from '../../utils/sessionStorage';

const baseURL = 'http://localhost:3001/api/v1/user';
// const baseURL = `${process.env.REACT_APP_API_URL}/api/v1/user`;

/**
 * GET USER DATA
 * fetch user data
 * @param   {object}  data      [user data]
 * @returns {object}  response  [data || undefined || error]
 */
export function getUser() {
  let token = getValueFromSessionStorage('TOKEN');
  let user = getValueFromSessionStorage('USER');
  console.log(token, user);
  return (dispatch) => {
    axios
      .post(`${baseURL}/profile`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        dispatch(editSuccess(token, user));
        // dispatch(editSuccess(response.data.body.user.firstName, response.data.body.user.lastName));
      })
      .catch((error) => {
        dispatch(editFailure(error.message));
      });
  };
}

/**
 * PUT NEW USER NAME in API
 * @param   {string}  firstName   [new user firstName]
 * @param   {string}  lastName    [new user lastName]
 * @returns
 */
export function newProfile(firstName, lastName, token) {
  return (dispatch) => {
    axios
      .put(
        `${baseURL}/profile`,
        { firstName, lastName },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        dispatch(editSuccess(firstName, lastName));
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

/////////////////////////////////////////////////////////////////////////////////
// import axios from 'axios';
// import { editSuccess, editFailure } from '../actions/userActions';
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
// export function getUser() {
//   return (dispatch) => {
//     let token = getValueFromLocalStorage('TOKEN');
//     axios
//       .post(`${baseURL}/profile`, {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((response) => {
//         dispatch(editSuccess(response.data.body));
//       })
//       .catch((error) => {
//         dispatch(editFailure(error.message));
//       });
//   };
// }

// // /**
// //  * PUT NEW USER NAME in API
// //  * @param   {string}  firstName   [new user firstName]
// //  * @param   {string}  lastName    [new user lastName]
// //  * @returns
// //  */
// // export function newProfile(firstName, lastName) {
// //   let user = getValueFromLocalStorage('USER');
// //   return (dispatch) => {
// //     axios
// //       .put(
// //         `${baseURL}/profile`,
// //         { headers: { Authorization: `Bearer ${user}` } },
// //         { firstName, lastName }
// //       )
// //       .then((response) => {
// //         dispatch(editProfile(response.data.body));
// //         setValueToLocalStorage(
// //           'USER',
// //           response.data.body.user.firstName +
// //             ' ' +
// //             response.data.body.user.lastName
// //         );
// //       })
// // .catch((error) => {
// //   dispatch(editFailure(error.message));
// // });
// //   };
// // }

// /**
//  * PUT NEW USER NAME in API
//  * @param   {string}  firstName   [new user firstName]
//  * @param   {string}  lastName    [new user lastName]
//  * @returns
//  */
// export function newProfile(firstName, lastName) {
//   let token = getValueFromLocalStorage('TOKEN');
//   return (dispatch) => {
//     axios
//       .put(
//         `${baseURL}/profile`,
//         { headers: { Authorization: `Bearer ${token}` } },
//         { firstName, lastName }
//       )
//       .then((response) => {
//         dispatch(editSuccess(response.data.body));
//         setValueToLocalStorage(
//           'USER',
//           response.data.body.user.firstName +
//             ' ' +
//             response.data.body.user.lastName
//         );
//         // window.location.replace(`/profile`);
//       })
//       .catch((error) => {
//         dispatch(editFailure(error.message));
//       });
//   };
// }
