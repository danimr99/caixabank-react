import { Routes, Route, Navigate } from "react-router-dom";

import { DashboardPage } from "../pages/DashboardPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
