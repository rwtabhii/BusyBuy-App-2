import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./redux/authReducer/authReducer";
import { productReducer } from "./redux/productReducer/productReducer";
import { cartReducer } from "./redux/cartReducer/cartReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,   // ✅ all slices go inside "reducer"
    products : productReducer,
    cart : cartReducer
  },
});
