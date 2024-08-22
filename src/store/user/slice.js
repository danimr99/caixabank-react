import { createSlice } from "@reduxjs/toolkit";

import { AuthenticationStatus } from "../../constants";

export const initialState = Object.freeze({
  user: {
    name: "Daniel Muelle",
    authenticationStatus: AuthenticationStatus.AUTHENTICATED,
  },
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { payload } = action;
      const { name } = payload;

      state.user = {
        name,
        authenticationStatus: AuthenticationStatus.AUTHENTICATED,
      };
    },
    logout: (state) => {
      state.user = {
        name: "",
        authenticationStatus: AuthenticationStatus.UNAUTHENTICATED,
      };
    },
  },
});
