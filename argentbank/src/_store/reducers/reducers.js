import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  EDIT_SUCCESS,
  EDIT_FAILURE,
} from '../actions/_types';

const initialState = {
  isAuth: false,
  token: null,
  user: null,
  firstName: '',
  lastName: '',

};

// const loggedUser = {
//   isAuth: true,
//   token: null,
//   user: null,
// }

/**
 * Authentication reducer
 *
 * @param   {object}   initialstate   user:   empty
 * @param   {boolean}  initialstate   isAuth: boolean
 * @param   {object}   action         action
 *
 * @return  {object}   user           new state
 * @return  {boolean}  isAuth         new state
 */
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: action.token,
        // token: action.payload.token,
        user: action.user,
        // user: action.payload.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        // token: null,
        user: null,
        error: action.error,
        // error: action.payload.error,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: false,
        // token: null,
        user: null,
      };
    default:
      return state;
  }
};

/**
 * User Reducer
 *
 * @param   {object}   initialstate   user:      empty
 * @param   {string}   initialstate   firstName: ""
 * @param   {string}   initialstate   lastName:  ""
 * @param   {object}   action         action
 *
 * @return  {object}   user           new state
 * @param   {string}   firstName      new state
 * @param   {string}   lastName       new state
 */
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // case EDIT_SUCCESS:
    //   return {
    //     ...state,
    //     user: action.user,
    //     // user: action.payload.user,
    //     isAuth: true,
    //   };
    case EDIT_SUCCESS:
    return {
      ...state,
      isAuth: true,
      token:action.token,
      user: action.user,
      firstName: action.firstName,
      lastName: action.lastName,

    };
    // case EDIT_SUCCESS:
    //   return {
    //     ...state,
    //     token: action.token,
    //     user: action.user,
    //     // user: { firstName: action.firstName, lastName: action.lastName },
    //     isAuth: true,
    //   };
    case EDIT_FAILURE:
      return {
        ...state,
        // token: null,
        user: null,
        error: action.error,
        // error: action.payload.error,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        isAuth: false,
      };
    default:
      return state;
  }
};
