import { AuthenticationStatus } from "../constants";
import { useGlobalState } from "./useGlobalState";
import { Stores } from "../store";

export const useAuthentication = () => {
  const { authenticationStatus } = useGlobalState(Stores.AUTHENTICATION);
  const isUserAuthenticated =
    authenticationStatus === AuthenticationStatus.AUTHENTICATED;

  return {
    isUserAuthenticated,
    authenticationStatus,
  };
};
