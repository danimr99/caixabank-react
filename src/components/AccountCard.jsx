import PropTypes from "prop-types";
import { Card, CardContent, Grid, Typography } from "@mui/material";

import { toMoney } from "../utils";
import { BorderRadius, Spacing } from "../layouts";
import { CardMenuButton, IconChip, Icons, Logo } from ".";

export const AccountCard = ({ account }) => {
  const handleCardMenuClick = (event) => {
    console.log(event);
  };

  return (
    <Card sx={{ borderRadius: BorderRadius.MD }}>
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Logo name={account?.bank} />
          </Grid>
          <Grid item>
            <CardMenuButton onClick={handleCardMenuClick} />
          </Grid>
        </Grid>

        <Grid container direction="column" justifyContent="flex-start">
          <Grid item>
            <Typography variant="h6">{account?.accountAlias}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">{account?.iban}</Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            marginTop: Spacing.LG,
            minHeight: "2rem",
            justifyContent: "space-between",
            gap: Spacing.MD,
          }}
        >
          <Grid item>
            {account?.isSharedAccount && (
              <IconChip
                iconName={Icons.SHARED_ACCOUNT}
                label="Shared"
                sx={{ fontWeight: 600, color: "text.secondary" }}
              />
            )}
          </Grid>

          <Grid item>
            <Grid
              container
              direction="row"
              alignItems="center"
              spacing={Spacing.DETAILS}
            >
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  Balance:
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  color={account?.balance < 0 ? "error" : "success"}
                  fontWeight={600}
                  sx={{ marginLeft: Spacing.DETAILS }}
                >
                  {toMoney(account?.balance)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
