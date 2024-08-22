import { createSlice } from "@reduxjs/toolkit";

import { accountsData } from "../../data";
import {
  format,
  generateAccountId,
  generateAccountIBAN,
  generateInitialDepositTransaction,
  toNumber,
} from "../../utils";

export const initialState = Object.freeze({
  accounts: [...format(accountsData)],
});

export const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    addAccount: (state, action) => {
      const { payload } = action;
      const { bank, accountAlias, initialDeposit, isSharedAccount } = payload;

      state?.accounts?.push({
        accountId: generateAccountId(state.accounts),
        bank,
        accountAlias,
        iban: generateAccountIBAN(),
        balance: toNumber(initialDeposit),
        transactions: [...generateInitialDepositTransaction(initialDeposit)],
        isSharedAccount,
      });
    },
    deleteAccount: (state, action) => {
      const { payload } = action;
      const { accountId } = payload;

      state.accounts = state?.accounts?.filter(
        (account) => account?.accountId !== accountId
      );
    },
  },
});
