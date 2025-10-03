import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UsersSlice.js";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
