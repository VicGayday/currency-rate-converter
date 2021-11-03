import { createStore, combineReducers } from "redux"
import { currency } from "./reducers/currency"
import { composeWithDevTools } from "redux-devtools-extension"

const rootReducer = combineReducers({
  currency
});

export const store = createStore(rootReducer, composeWithDevTools())
