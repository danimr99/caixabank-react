import { createSlice } from "@reduxjs/toolkit";

import { AuthenticationStatus } from "../../constants";

export const initialState = Object.freeze({
  user: {
    fullName: "",
    authenticationStatus: AuthenticationStatus.PENDING,
  },
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { payload } = action;
      const { fullName } = payload;

      state.user = {
        fullName,
        authenticationStatus: AuthenticationStatus.AUTHENTICATED,
      };
    },
    logout: (state) => {
      state.user = {
        fullName: "",
        authenticationStatus: AuthenticationStatus.UNAUTHENTICATED,
      };
    },
  },
});
