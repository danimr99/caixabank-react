import { Routes, Route, Navigate } from "react-router-dom";

import { LoginPage } from "../pages";

export const AuthenticationRoutes = () => (
  <Routes>
    <Route path="login" element={<LoginPage />} />
    <Route path="*" element={<Navigate to="login" replace />} />
  </Routes>
);
