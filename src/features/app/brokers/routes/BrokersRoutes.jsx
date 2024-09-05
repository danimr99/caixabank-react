import { Routes, Route, Navigate } from "react-router-dom";

import { BrokerDetailsPage, BrokersPage } from "../pages";

export const BrokersRoutes = () => (
  <Routes>
    <Route path="/" element={<BrokersPage />} />
    <Route path=":brokerId/details" element={<BrokerDetailsPage />} />
    <Route path="*" element={<Navigate to="" replace />} />
  </Routes>
);
