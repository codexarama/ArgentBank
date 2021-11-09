import { LOGIN } from '../actions/types';

const initialstate = {
  isLogged: false,
};

export const authentication = (state = initialstate, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogged: true,
      };
    default:
      return state;
  }
};
