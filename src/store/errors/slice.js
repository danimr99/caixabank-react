/** @import {AddErrorAction, ClearErrorAction, ErrorsState} from "../../docs" */

import { createSlice } from "@reduxjs/toolkit";

import { Stores } from "../stores";
import { getCurrentISODatetime } from "../../utils";

export const initialState = Object.freeze({
  errors: {},
});

export const errorsSlice = createSlice({
  name: Stores.ERRORS,
  initialState,
  reducers: {
    /**
     * Adds an error to the errors registry.
     *
     * @function
     * @param {ErrorsState} state - The current state.
     * @param {AddErrorAction} action - The action to be dispatched.
     */
    addError: (state, action) => {
      const { payload } = action;

      state.errors = {
        ...state.errors,
        [payload?.id]: {
          datetime: getCurrentISODatetime(),
          message: payload?.message,
        },
      };
    },
    /**
     * Clears an error from the errors registry.
     *
     * @function
     * @param {ErrorsState} state - The current state.
     * @param {ClearErrorAction} action - The action to be dispatched.
     */
    clearError: (state, action) => {
      const { payload } = action;
      delete state?.errors[payload?.id];
    },
    /**
     * Resets the errors registry.
     *
     * @function
     * @param {ErrorsState} state - The current state.
     */
    resetErrors: (state) => {
      state.errors = initialState?.errors;
    },
  },
});
