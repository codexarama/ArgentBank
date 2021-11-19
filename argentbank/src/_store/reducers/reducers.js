import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  GET_USER,
  EDIT_PROFILE,
} from '../actions/_types';

const initialstate = {
  token: null,
  isAuth: false,
  user: null,
  firstName: '',
  lastName: '',
};

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
export const authReducer = (state = initialstate, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        // token: action.payload.token,
        // user: action.user,
        // user: action.payload.user,
        isAuth: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        // user: null,
        error: action.error,
        // error: action.payload.error,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        token: null,
        // user: null,
        isAuth: false,
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
export const userReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.user,
        error: action.error,
        // user: action.payload.user,
        // error: action.payload.error,
      };
    case EDIT_PROFILE:
      return {
        ...state,
        user: { firstName: action.firstName, lastName: action.lastName },
      };
    // case EDIT_PROFILE:
    //   return {
    //     ...state,
    //     firstName: action.firstName,
    //     lastName: action.lastName,
    //   };
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
