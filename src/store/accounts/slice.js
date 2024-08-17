import { createSlice } from "@reduxjs/toolkit";

import { accountsData } from "../../data";
import { format } from "../../utils";

export const initialState = {
  accounts: [...format(accountsData), ...format(accountsData)],
};

export const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
  },
});
