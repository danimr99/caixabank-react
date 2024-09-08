import { Routes, Route, Navigate } from "react-router-dom";

import { AccountOperationsProvider } from "../contexts";
import { AccountsDetailsPage, AccountsPage } from "../pages";

export const AccountsRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <AccountOperationsProvider>
          <AccountsPage />
        </AccountOperationsProvider>
      }
    />
    <Route
      path=":accountId/details"
      element={
        <AccountOperationsProvider>
          <AccountsDetailsPage />
        </AccountOperationsProvider>
      }
    />
    <Route path="*" element={<Navigate to="" replace />} />
  </Routes>
);
