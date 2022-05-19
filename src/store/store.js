import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getDataReducer } from "../reducers/getData";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  getData: getDataReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
