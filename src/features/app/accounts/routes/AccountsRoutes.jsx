import { Routes, Route, Navigate } from "react-router-dom";
import { AccountsPage } from "../pages";

export const AccountsRoutes = () => (
  <Routes>
    <Route path="/" element={<AccountsPage />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
