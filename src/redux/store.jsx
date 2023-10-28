import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { authSlice } from "./slices/authSlice";


const rootReducer = combineReducers({
  auth: authSlice.reducer,
});

const persistedReducer = persistReducer( rootReducer);

export const store = configureStore({
  middleware: [thunk],
});

export default store;