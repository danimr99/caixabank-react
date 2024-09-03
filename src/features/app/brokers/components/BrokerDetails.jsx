import PropTypes from "prop-types";
import { Grid, Stack } from "@mui/material";

import { translateCountry } from "../../../../utils";
import { LabeledValueText, Spacing, ViewBox } from "../../../../ui";

export const BrokerDetails = ({ details }) => {
  return (
    <Stack direction="column" spacing={Spacing.MD}>
      <ViewBox title="Contact Information">
        <Grid container direction="column" rowSpacing={Spacing.MD}>
          <Grid item>
            <LabeledValueText
              label="Country"
              value={translateCountry(details?.country)}
            />
          </Grid>

          <Grid item>
            <LabeledValueText label="Address" value={details?.address} />
          </Grid>

          <Grid item>
            <LabeledValueText label="Phone" value={details?.phone} />
          </Grid>

          <Grid item>
            <LabeledValueText label="Email" value={details?.email} />
          </Grid>
        </Grid>
      </ViewBox>

      <ViewBox title="Regulatory Information">
        <Grid container direction="column" rowSpacing={Spacing.MD}>
          <Grid item>
            <LabeledValueText label="Licenses" value={details?.license} />
          </Grid>
        </Grid>
      </ViewBox>
    </Stack>
  );
};

BrokerDetails.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    license: PropTypes.string,
    website: PropTypes.string,
    foundationYear: PropTypes.string,
  }).isRequired,
};
