import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    users: userSlice
  },
}, composeWithDevTools());

console.log('actions');
export default store;
