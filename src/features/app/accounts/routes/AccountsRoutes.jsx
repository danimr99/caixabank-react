import { Routes, Route, Navigate } from "react-router-dom";

import { AccountsDetailsPage, AccountsPage } from "../pages";

export const AccountsRoutes = () => (
  <Routes>
    <Route path="/" element={<AccountsPage />} />
    <Route path=":accountId/details" element={<AccountsDetailsPage />} />
    <Route path="*" element={<Navigate to="" replace />} />
  </Routes>
);
