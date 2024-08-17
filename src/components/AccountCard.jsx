import PropTypes from "prop-types";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

import { toMoney } from "../utils";
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
            <Logo variant={account?.bank} />
            <CardMenuButton onClick={handleCardMenuClick} />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h6">{account?.name}</Typography>
              <Typography variant="body1">{account?.accountNumber}</Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="end"
            alignItems="end"
            sx={{ marginTop: "1rem" }}
          >
            <Typography variant="body2" color="text.secondary">
              Balance:
            </Typography>
            <Typography
              variant="body2"
              color={account?.balance < 0 ? "red" : "black"}
              fontWeight={600}
              sx={{ marginLeft: "0.25rem" }}
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
    accountNumber: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    bank: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
