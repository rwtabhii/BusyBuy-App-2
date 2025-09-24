import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./redux/authReducer/authReducer";
import { productReducer } from "./redux/productReducer/productReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,   // ✅ all slices go inside "reducer"
    products : productReducer
  },
});
