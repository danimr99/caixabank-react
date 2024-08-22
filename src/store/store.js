import { configureStore } from "@reduxjs/toolkit";

import { accountsSlice } from "./accounts";
import { userSlice } from "./user";

export const store = configureStore({
  reducer: {
    accounts: accountsSlice.reducer,
    user: userSlice.reducer,
  },
});
