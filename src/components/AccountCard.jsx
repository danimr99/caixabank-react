import PropTypes from "prop-types";
import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";

import { toMoney } from "../utils";
import { BorderRadius, Spacing } from "../layouts";
import { CardMenuButton, Chip, Logo } from ".";

export const AccountCard = ({ account }) => {
  const handleCardMenuClick = (event) => {
    console.log(event);
  };

  return (
    <Card sx={{ borderRadius: BorderRadius.MD }}>
      <CardContent>
        <Stack direction="column" spacing={1}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Logo name={account?.bank} />
            </Grid>

            <Grid item>
              <CardMenuButton onClick={handleCardMenuClick} />
            </Grid>
          </Grid>

          <Stack
            direction="column"
            spacing={2}
            sx={{ paddingX: "16px" }}
            useFlexGap
          >
            <Typography
              variant="h4"
              color={(theme) =>
                account?.balance < 0
                  ? theme?.palette?.error?.main
                  : theme?.palette?.text?.primary
              }
              fontWeight={600}
            >
              {toMoney(account?.balance)}
            </Typography>

            <Grid container direction="column">
              <Grid item>
                <Typography variant="h6">{account?.accountAlias}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" color="text.secondary">
                  {account?.iban}
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              direction="row"
              spacing={1}
              sx={{
                minHeight: Spacing.XL,
                marginTop: Spacing.DETAILS,
              }}
            >
              {account?.isSharedAccount && (
                <Grid item>
                  <Chip
                    label="Shared"
                    sx={{
                      fontWeight: 600,
                      color: "text.secondary",
                    }}
                  />
                </Grid>
              )}
            </Grid>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

AccountCard.propTypes = {
  account: PropTypes.shape({
    accountId: PropTypes.number.isRequired,
    iban: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    bank: PropTypes.string.isRequired,
    accountAlias: PropTypes.string.isRequired,
    isSharedAccount: PropTypes.bool.isRequired,
  }),
};
