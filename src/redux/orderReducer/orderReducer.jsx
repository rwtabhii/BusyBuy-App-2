// src/redux/orderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = []; // orders array

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      return action.payload; // replace all orders
    }
  },
});

export const { setOrders, addOrder, clearOrders } = orderSlice.actions;
export const orderSelector = (state) => state.order; // selector
export const orderReducer = orderSlice.reducer;
