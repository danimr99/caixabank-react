import { createSlice } from "@reduxjs/toolkit";

import { AuthenticationStatus, LocalStorageKeys } from "../../constants";
import { Stores } from "../stores";
import { getLocalStorageItem } from "../../utils";

export const initialState = Object.freeze({
  authenticationStatus:
    getLocalStorageItem(LocalStorageKeys.USER) !== null
      ? AuthenticationStatus.AUTHENTICATED
      : AuthenticationStatus.PENDING,
});

export const authenticationSlice = createSlice({
  name: Stores.AUTHENTICATION,
  initialState,
  reducers: {
    setAuthenticationStatus: (state, action) => {
      const { payload } = action;
      state.authenticationStatus = payload;
    },
  },
});
