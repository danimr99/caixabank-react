/** @import {AuthenticationStatus as AuthenticationStatusType} from "../docs" */

import { AuthenticationStatus } from "../constants";
import { useGlobalState } from "./useGlobalState";
import { Stores } from "../store";

/**
 * Custom hook to check if the user is authenticated and get the authentication status.
 *
 * @function
 * @returns {{isUserAuthenticated: boolean, authenticationStatus: AuthenticationStatusType}} The user authentication status.
 */
export const useAuthentication = () => {
  const { authenticationStatus } = useGlobalState(Stores.AUTHENTICATION);
  const isUserAuthenticated =
    authenticationStatus === AuthenticationStatus.AUTHENTICATED;

  return {
    isUserAuthenticated,
    authenticationStatus,
  };
};
