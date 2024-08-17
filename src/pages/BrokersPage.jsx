import { Typography } from "@mui/material";

import { NavigationLayout, PageContentLayout } from "../layouts";

export const BrokersPage = () => {
  return (
    <NavigationLayout>
      <Typography variant="h4" fontWeight="600" component="h1">
        Brokers
      </Typography>

      <PageContentLayout></PageContentLayout>
    </NavigationLayout>
  );
};
