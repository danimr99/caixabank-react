import { Navigate, Route, Routes } from "react-router-dom";

import { NotFoundPage } from "../../pages";

export const FallbackRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/app/dashboard" replace />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
