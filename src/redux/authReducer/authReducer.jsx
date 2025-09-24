import { createSlice } from "@reduxjs/toolkit";

// creating the inital state
const initialState = {
  login: false,
  userDetail: null,
};

// creating the authSlice from the createSlice
export  const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setUserDetail: (state, action) => {
      state.userDetail = action.payload;
    },
    logout: (state) => {
      state.login = false;
      state.userDetail = null;
    },
  },
});


// this is our Auth reducer
export const authReducer = authSlice.reducer;

// these are our actions
export const { setLogin, setUserDetail, logout } = authSlice.actions;
// this is our selector
export const authSelector = (state)=> state.auth
