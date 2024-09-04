import { createSlice } from "@reduxjs/toolkit";

import { LocalStorageKeys } from "../../constants";
import { Stores } from "../stores";
import { getLocalStorageItem } from "../../utils";

export const initialState = Object.freeze({
  user: getLocalStorageItem(LocalStorageKeys.USER),
});

export const userSlice = createSlice({
  name: Stores.USER,
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
