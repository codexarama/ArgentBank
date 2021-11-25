import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  EDIT_SUCCESS,
  EDIT_FAILURE,
} from '../actions/_types';

import { token, user } from '../../utils/storage';

const initialState = user
  ? {
      isAuth: true,
      token,
      user,
      firstName: user.split(' ')[0],
      lastName: user.split(' ')[1],
    }
  : { isAuth: false, token: null, user: null, firstName: '', lastName: '' };

/**
 * Authentication reducer
 *
 * @param   {object}   state          initialState
 * @param   {string}   initialstate   token:  null || JWT
 * @param   {string}   initialstate   user:   null || user data
 * @param   {boolean}  initialstate   isAuth: boolean
 *
 * @param   {object}   action         action
 *
 * @return  {string}   token          new state
 * @return  {string}   user           new state
 * @return  {boolean}  isAuth         new state
 */
export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        initialState,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        error: payload.error,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        initialState,
      };
    default:
      return state;
  }
};

/**
 * User Reducer
 *
 * @param   {object}   state          initialState
 * @param   {string}   firstName      user first name
 * @param   {string}   lastName       user last name
 *
 * @param   {object}   action         action
 *
 * @param   {string}   firstName      new state: new user first name
 * @param   {string}   lastName       new state: new user first name
 */
export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case EDIT_SUCCESS:
      return {
        ...state,
        initialState,
        firstName: payload.firstName ? payload.firstName : state.firstName,
        lastName: payload.lastName ? payload.lastName : state.lastName,
      };

    case EDIT_FAILURE:
      return {
        ...state,
        initialState,
        error: payload.error,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        initialState,
      };
    default:
      return state;
  }
};
