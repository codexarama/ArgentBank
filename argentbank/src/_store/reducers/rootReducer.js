import { combineReducers } from "redux";
import { authReducer, userReducer } from "./reducers";

const rootReducer = combineReducers({
  authReducer,
  userReducer
});

export default rootReducer
