import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counterReducer";
import { userReducer } from "./userReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  counter: counterReducer,
  users: userReducer,
});
export const store = createStore(reducers, composeWithDevTools());
