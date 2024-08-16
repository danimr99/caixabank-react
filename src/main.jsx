import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { ThemeProvider } from "./contexts";
import { store } from "./store/store";
import { CaixaBankApp } from "./CaixaBankApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <CaixaBankApp />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
