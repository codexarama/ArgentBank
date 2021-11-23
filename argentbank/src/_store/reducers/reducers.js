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
 * @param   {object}   initialstate   token:  null || JWT
 * @param   {object}   initialstate   user:   null || user data
 * @param   {boolean}  initialstate   isAuth: boolean
 *
 * @param   {object}   action         action
 *
 * @return  {object}   token          new state
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
        user: payload.user,
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
        isAuth: true,
        token: state.token,
        user: state.user,
        // firstName: payload.firstName,
        // lastName: payload.lastName
        firstName: payload.firstName ? payload.firstName : state.firstName,
        lastName: payload.lastName ? payload.lastName : state.lastName,
      };

    // case EDIT_SUCCESS:
    //   return {
    //     ...state,
    //     firstName: payload.firstName ? payload.firstName : state.firstName,
    //     lastName: payload.lastName ? payload.lastName : state.lastName,
    //   };

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
