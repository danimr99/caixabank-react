import { Routes, Route, Navigate } from "react-router-dom";

import { BrokersPage } from "../pages";

export const BrokersRoutes = () => (
  <Routes>
    <Route path="/" element={<BrokersPage />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);
