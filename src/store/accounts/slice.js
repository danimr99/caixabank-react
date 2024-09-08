import { createSlice } from "@reduxjs/toolkit";

import { accountsData } from "../../data";
import { TransactionConcepts, TransactionTypes } from "../../constants";
import { Stores } from "../stores";
import {
  generateAccountId,
  generateAccountIBAN,
  generateInitialDepositTransaction,
  toNumber,
  generateTransactionId,
  getCurrentISODatetime,
} from "../../utils";

export const initialState = Object.freeze({
  accounts: accountsData,
});

export const accountsSlice = createSlice({
  name: Stores.ACCOUNTS,
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
    renameAccount: (state, action) => {
      const { payload } = action;
      const { accountId, newAccountAlias } = payload;

      state.accounts = state?.accounts?.map((account) =>
        account?.accountId === accountId
          ? { ...account, accountAlias: newAccountAlias }
          : account
      );
    },
    addTransaction: (state, action) => {
      const { payload } = action;
      const { accountId, transactionType, concept, amount } = payload;

      const newTransaction = {
        transactionId: generateTransactionId(
          state.accounts.flatMap((account) => account.transactions)
        ),
        transactionDate: getCurrentISODatetime(),
        concept,
        amount: [
          TransactionTypes.WITHDRAWAL,
          TransactionTypes.TRANSFER,
        ].includes(transactionType)
          ? -toNumber(amount)
          : toNumber(amount),
      };

      state.accounts = state?.accounts?.map((account) =>
        account?.accountId === accountId
          ? {
              ...account,
              balance:
                toNumber(account?.balance) + toNumber(newTransaction?.amount),
              transactions: [...account.transactions, newTransaction],
            }
          : account
      );
    },
    addTransference: (state, action) => {
      const { payload } = action;
      const { accountId, destinationAccountId, amount } = payload;
      const transactionId = generateTransactionId(
        state.accounts.flatMap((account) => account.transactions)
      );

      const incomeTransaction = {
        transactionId,
        transactionDate: getCurrentISODatetime(),
        concept: TransactionConcepts.TRANSFER_RECEIVED,
        amount: toNumber(amount),
      };

      const outcomeTransaction = {
        transactionId: transactionId + 1,
        transactionDate: getCurrentISODatetime(),
        concept: TransactionConcepts.TRANSFER_SENT,
        amount: -toNumber(amount),
      };

      state.accounts = state?.accounts?.map((account) => {
        if (account?.accountId === accountId) {
          return {
            ...account,
            balance:
              toNumber(account?.balance) + toNumber(outcomeTransaction?.amount),
            transactions: [...account.transactions, outcomeTransaction],
          };
        }

        if (account?.accountId === destinationAccountId) {
          return {
            ...account,
            balance:
              toNumber(account?.balance) + toNumber(incomeTransaction?.amount),
            transactions: [...account.transactions, incomeTransaction],
          };
        }

        return account;
      });
    },
  },
});
