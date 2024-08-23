import { createSlice } from "@reduxjs/toolkit";

export const initialState = Object.freeze({
  user: {
    fullName: "",
  },
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { payload } = action;
      state.user = payload;
    },
    resetUser: (state) => {
      state.user = initialState?.user;
    },
  },
});
