import PropTypes from "prop-types";
import { Grid, Typography } from "@mui/material";

import { MoneyText, Spacing, ViewBox } from "../../../../ui";

export const AccountBalanceView = ({ balance }) => {
  return (
    <ViewBox>
      <Grid container direction="column" rowSpacing={Spacing.MD}>
        <Grid item>
          <Typography variant="subtitle" fontWeight={600} gutterBottom>
            Balance
          </Typography>
          <MoneyText amount={balance} />
        </Grid>
      </Grid>
    </ViewBox>
  );
};

AccountBalanceView.propTypes = {
  balance: PropTypes.number.isRequired,
};
