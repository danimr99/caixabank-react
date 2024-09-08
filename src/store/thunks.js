import { AuthenticationStatus, LocalStorageKeys } from "../constants";
import { removeLocalStorageItem, setLocalStorageItem } from "../utils";
import { setAuthenticationStatus } from "./authentication";
import { addTransaction, addTransference } from "./accounts";
import { resetUser, setUser } from "./user";

export const login = (user) => (dispatch) => {
  setLocalStorageItem(LocalStorageKeys.USER, user);
  dispatch(setUser(user));
  dispatch(setAuthenticationStatus(AuthenticationStatus.AUTHENTICATED));
};

export const logout = () => (dispatch) => {
  removeLocalStorageItem(LocalStorageKeys.USER);
  dispatch(resetUser());
  dispatch(setAuthenticationStatus(AuthenticationStatus.UNAUTHENTICATED));
};

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

export const createTransference = (payload) => (dispatch) => {
  const { accountId, destinationAccountId, amount } = payload;
  dispatch(addTransference({ accountId, destinationAccountId, amount }));
};
