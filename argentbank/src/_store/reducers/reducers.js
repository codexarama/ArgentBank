import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  GET_USER,
  EDIT_PROFILE,
} from '../actions/_types';

const initialstate = {
  user: null,
  isAuth: false,
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
        user: action.user,
        isAuth: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        error: action.error,
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
      };
    case EDIT_PROFILE:
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName,
      };
    default:
      return state;
  }
};
