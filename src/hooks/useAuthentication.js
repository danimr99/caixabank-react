import { AuthenticationStatus } from "../constants";
import { useGlobalState } from "./useGlobalState";
import { Stores } from "../store";

export const useAuthentication = () => {
  const { user } = useGlobalState(Stores.USER);
  const isUserAuthenticated =
    user?.authenticationStatus === AuthenticationStatus.AUTHENTICATED;

  return {
    isUserAuthenticated,
    userAuthenticationStatus: user?.authenticationStatus,
  };
};
