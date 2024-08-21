import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { ThemeProvider, NotificationsProvider } from "./contexts";
import { store } from "./store/store";
import { CaixaBankApp } from "./CaixaBankApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <NotificationsProvider>
            <CaixaBankApp />
          </NotificationsProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
