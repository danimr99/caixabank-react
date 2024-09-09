/** @import {AddTransaction, AddTransference, User} from '../docs' */

import { AuthenticationStatus, LocalStorageKeys } from "../constants";
import { removeLocalStorageItem, setLocalStorageItem } from "../utils";
import { setAuthenticationStatus } from "./authentication";
import { addTransaction, addTransference } from "./accounts";
import { resetUser, setUser } from "./user";

/**
 * Logs in a user.
 *
 * @function
 * @param {User} user - The user.
 * @returns {function} A redux thunk.
 */
export const login = (user) => (dispatch) => {
  setLocalStorageItem(LocalStorageKeys.USER, user);
  dispatch(setUser({ user }));
  dispatch(
    setAuthenticationStatus({
      authenticationStatus: AuthenticationStatus.AUTHENTICATED,
    })
  );
};

/**
 * Logs out a user.
 *
 * @function
 * @returns {function} A redux thunk.
 */
export const logout = () => (dispatch) => {
  removeLocalStorageItem(LocalStorageKeys.USER);
  dispatch(resetUser());
  dispatch(
    setAuthenticationStatus({
      authenticationStatus: AuthenticationStatus.UNAUTHENTICATED,
    })
  );
};

/**
 * Creates a transaction.
 *
 * @function
 * @param {AddTransaction} payload - Transaction data.
 * @returns {function} A redux thunk.
 */
export const createTransaction = (payload) => (dispatch) => {
  const { accountId, transactionType, concept, amount } = payload;
  dispatch(
    addTransaction({
      accountId,
      transactionType,
      concept,
      amount,
    })
  );
};

/**
 * Creates a transference.
 *
 * @function
 * @param {AddTransference} payload - Transference data.
 * @returns {function} A redux thunk.
 */
export const createTransference = (payload) => (dispatch) => {
  const { accountId, destinationAccountId, amount } = payload;
  dispatch(addTransference({ accountId, destinationAccountId, amount }));
};
