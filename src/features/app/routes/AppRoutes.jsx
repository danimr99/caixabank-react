import { Routes, Route, Navigate } from "react-router-dom";

import { DashboardRoutes } from "../dashboard/routes";
import { AccountsRoutes } from "../accounts/routes";
import { BrokersRoutes } from "../brokers/routes";

export const AppRoutes = () => (
  <Routes>
    <Route path="dashboard/*" element={<DashboardRoutes />} />
    <Route path="accounts/*" element={<AccountsRoutes />} />
    <Route path="brokers/*" element={<BrokersRoutes />} />
    <Route path="*" element={<Navigate to="dashboard" replace />} />
  </Routes>
);
