import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "./contexts";
import { CaixaBankApp } from "./CaixaBankApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CaixaBankApp />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
