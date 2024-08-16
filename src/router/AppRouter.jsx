import { Routes, Route, Navigate } from "react-router-dom";

import { Routes as RoutesList } from "../constants";
import { DashboardPage } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={RoutesList.DASHBOARD} element={<DashboardPage />} />

      <Route path="/*" element={<Navigate to={RoutesList.DASHBOARD} />} />
    </Routes>
  );
};
