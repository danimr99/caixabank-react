import { AuthenticationStatus, LocalStorageKeys } from "../constants";
import { removeLocalStorageItem, setLocalStorageItem } from "../utils";
import { setAuthenticationStatus } from "./authentication";
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
