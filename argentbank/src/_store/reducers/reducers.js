import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  EDIT_SUCCESS,
  EDIT_FAILURE,
} from '../actions/_types';

import { getValueFromSessionStorage } from '../../utils/sessionStorage';
import { getValueFromLocalStorage } from '../../utils/localStorage';

const token =
  getValueFromSessionStorage('TOKEN') || getValueFromLocalStorage('TOKEN');
const user =
  getValueFromSessionStorage('USER') || getValueFromLocalStorage('USER');

const initialState = user
  ? { isAuth: true, token, user }
  : { isAuth: false, token: null, user: null };

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
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload.token,
        // token: payload.payload.token,
        user: payload.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        // token: null,
        user: null,
        error: payload.error,
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
  const { type, payload } = action;

  switch (type) {
    case EDIT_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: state.token,
        user: state.user,
        firstName: payload.firstName ? payload.firstName : state.firstName,
        lastName: payload.firstName ? payload.lastName : state.lastName,
      };

    case EDIT_FAILURE:
      return {
        ...state,
        isAuth: true,
        token: state.token,
        user: state.user,
        error: payload.error,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: false,
        user: null,
      };
    default:
      return state;
  }
};
