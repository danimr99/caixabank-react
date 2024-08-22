import { Navigate, Route, Routes } from "react-router-dom";

import { NotFoundPage } from "../pages";

export const FallbackRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/app" />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
