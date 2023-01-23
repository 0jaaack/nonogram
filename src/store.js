import { combineReducers, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import puzzleReducer from "./features/puzzle";

const reducer = combineReducers({
  puzzle: puzzleReducer,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
