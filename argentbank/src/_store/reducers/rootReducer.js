import { combineReducers } from "redux";
import { authReducer } from "./reducers";

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer
