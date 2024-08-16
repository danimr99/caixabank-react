import { configureStore } from "@reduxjs/toolkit";

import { accountsSlice } from "./accounts";

export const store = configureStore({
  reducer: {
    accounts: accountsSlice.reducer,
  },
});
