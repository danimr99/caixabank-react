import { Typography } from "@mui/material";

import { NavigationLayout, PageContentLayout } from "../layouts";

export const TransactionsPage = () => {
  return (
    <NavigationLayout>
      <Typography variant="h4" fontWeight="600" component="h1">
        Transactions
      </Typography>

      <PageContentLayout></PageContentLayout>
    </NavigationLayout>
  );
};
