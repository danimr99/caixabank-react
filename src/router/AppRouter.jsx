import { Routes, Route } from "react-router-dom";

import { AuthenticationGuard, NoAuthenticationGuard } from "./guards";
import { AuthenticationRoutes } from "../features/authentication/routes";
import { AppRoutes } from "../features/app/routes";
import { FallbackRoutes } from "../features/fallback/routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="authentication/*"
        element={
          <NoAuthenticationGuard>
            <AuthenticationRoutes />
          </NoAuthenticationGuard>
        }
      />
      <Route
        path="app/*"
        element={
          <AuthenticationGuard>
            <AppRoutes />
          </AuthenticationGuard>
        }
      />
      <Route path="*" element={<FallbackRoutes />} />
    </Routes>
  );
};
