import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CountValue from "./reducer/count-reducer";

//Comnbine reducers
const rootReducer = combineReducers({
  count: CountValue,
});

// Configure the store
export const Store = configureStore({
  reducer: rootReducer,
});
