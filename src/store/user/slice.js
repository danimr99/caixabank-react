import { createSlice } from "@reduxjs/toolkit";

import { getLocalStorageItem } from "../../utils";
import { LocalStorageKeys } from "../../constants";

export const initialState = Object.freeze({
  user: getLocalStorageItem(LocalStorageKeys.USER),
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
