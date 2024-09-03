import { CircularProgress, Stack, Typography } from "@mui/material";

import { Spacing } from "../layouts";

export const LoadingIndicator = () => {
  return (
    <Stack
      direction="column"
      spacing={Spacing.MD}
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
      <Typography variant="body1">Loading...</Typography>
    </Stack>
  );
};
