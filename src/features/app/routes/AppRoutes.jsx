import { Routes, Route, Navigate } from "react-router-dom";

import { AccountsRoutes } from "../accounts/routes";

export const AppRoutes = () => (
  <Routes>
    <Route path="accounts/*" element={<AccountsRoutes />} />
    <Route path="*" element={<Navigate to="accounts" />} />
  </Routes>
);
