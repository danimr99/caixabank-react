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
    clearError: (state, action) => {
      const { payload } = action;
      delete state?.errors[payload];
    },
    resetErrors: (state) => {
      state.errors = initialState?.errors;
    },
  },
});
