import { useContext } from "react";

import { AccountOperationsContext } from "./AccountOperationsContext";

export const useAccountOperationsContext = () => {
  const context = useContext(AccountOperationsContext);

  if (!context) {
    throw new Error(
      "useOperationsContext must be used within an OperationsProvider."
    );
  }

  return context;
};
