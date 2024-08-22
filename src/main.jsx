import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider, NotificationsProvider } from "./contexts";
import { RouterProvider, StoreProvider } from "./providers";
import { CaixaBankApp } from "./CaixaBankApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreProvider>
      <RouterProvider>
        <ThemeProvider>
          <NotificationsProvider>
            <CaixaBankApp />
          </NotificationsProvider>
        </ThemeProvider>
      </RouterProvider>
    </StoreProvider>
  </StrictMode>
);
