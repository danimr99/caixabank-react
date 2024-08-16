import { createSlice } from "@reduxjs/toolkit";

import accountsData from "../../data/accounts.json";

export const initialState = {
  accounts: accountsData,
};

export const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    setAccounts: (state, action) => {
      state.accounts = action.payload;
    },
  },
});
