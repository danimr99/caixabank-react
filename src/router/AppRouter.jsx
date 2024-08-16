import { Routes, Route, Navigate } from "react-router-dom";

import { Routes as RoutesList } from "../constants";
import { AccountsPage } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={RoutesList.ACCOUNTS} element={<AccountsPage />} />

      <Route path="/*" element={<Navigate to={RoutesList.ACCOUNTS} />} />
    </Routes>
  );
};
