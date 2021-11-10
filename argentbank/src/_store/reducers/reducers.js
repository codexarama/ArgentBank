import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/types';

const initialstate = {
  user: null,
  isAuth: false,
};

export const authReducer = (state = initialstate, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isAuth: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload.error,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuth: false,
      };
    default:
      return state;
  }
};
