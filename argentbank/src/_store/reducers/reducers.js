import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/types';

const initialstate = {
  user: null,
  isAuth: false,
};

export const authReducer = (state = initialstate, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        
        // user: {
        //   firstName: action.payload.firstName,
        //   lastName: action.payload.lastName,
        // },

        user: action.payload.user,
        isAuth: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
