/** @import {SetUserAction, UserState} from "../../docs" */

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
    /**
     * Sets the user.
     *
     * @function
     * @param {UserState} state - The current state.
     * @param {SetUserAction} action - The action to be dispatched.
     */
    setUser: (state, action) => {
      const { payload } = action;
      state.user = payload?.user;
    },
    /**
     * Resets the user.
     *
     * @function
     * @param {UserState} state - The current state.
     */
    resetUser: (state) => {
      state.user = initialState?.user;
    },
  },
});
