import PropTypes from "prop-types";
import { Grid } from "@mui/material";

import { LabeledValueText, Spacing, ViewBox } from "../../../../ui";

export const AccountInformationView = ({ bank, iban, isSharedAccount }) => {
  return (
    <ViewBox title="Account Information">
      <Grid container direction="column" rowSpacing={Spacing.MD}>
        <Grid item>
          <LabeledValueText label="Banking entity" value={bank} />
        </Grid>

        <Grid item>
          <LabeledValueText label="IBAN" value={iban} />
        </Grid>

        <Grid item>
          <LabeledValueText
            label="Shared account"
            value={isSharedAccount ? "Yes" : "No"}
          />
        </Grid>
      </Grid>
    </ViewBox>
  );
};

AccountInformationView.propTypes = {
  bank: PropTypes.string.isRequired,
  iban: PropTypes.string.isRequired,
  isSharedAccount: PropTypes.bool.isRequired,
};
