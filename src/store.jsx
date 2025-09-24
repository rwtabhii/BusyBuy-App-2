import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./redux/authReducer/authReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,   // ✅ all slices go inside "reducer"
  },
});
