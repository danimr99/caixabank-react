import { configureStore } from "@reduxjs/toolkit";

import { accountsSlice } from "./accounts";
import { authenticationSlice } from "./authentication";
import { userSlice } from "./user";

export const store = configureStore({
  reducer: {
    accounts: accountsSlice.reducer,
    authentication: authenticationSlice.reducer,
    user: userSlice.reducer,
  },
});
