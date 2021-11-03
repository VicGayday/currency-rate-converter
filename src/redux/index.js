import { createStore, combineReducers } from "redux";
// import { auth } from "./reducers/auth";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  // auth,
});

export const store = createStore(rootReducer, composeWithDevTools());
