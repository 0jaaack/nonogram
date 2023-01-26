import { combineReducers, applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import puzzleReducer from "./features/puzzle";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  puzzle: puzzleReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, {}, applyMiddleware(logger));
export const persistor = persistStore(store);
