import PropTypes from "prop-types";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

import { toMoney } from "../utils";
import { Spacing } from "../layouts";
import { CardMenuButton, Logo } from ".";

export const AccountCard = ({ account }) => {
  const handleCardMenuClick = (event) => {
    console.log(event);
  };

  return (
    <Grid key={account?.accountId} item xs={12} md={6} lg={4}>
      <Card sx={{ borderRadius: "6px" }}>
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Logo name={account?.bank} />
            <CardMenuButton onClick={handleCardMenuClick} />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h6">{account?.accountAlias}</Typography>
              <Typography variant="body1">{account?.iban}</Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="end"
            alignItems="end"
            sx={{ marginTop: Spacing.MD }}
          >
            <Typography variant="body2" color="text.secondary">
              Balance:
            </Typography>
            <Typography
              variant="body2"
              color={account?.balance < 0 ? "red" : "black"}
              fontWeight={600}
              sx={{ marginLeft: Spacing.DETAILS }}
            >
              {toMoney(account?.balance)}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

AccountCard.propTypes = {
  account: PropTypes.shape({
    accountId: PropTypes.number.isRequired,
    iban: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    bank: PropTypes.string.isRequired,
    accountAlias: PropTypes.string.isRequired,
  }),
};
