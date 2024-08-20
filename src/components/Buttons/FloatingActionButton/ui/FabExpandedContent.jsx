import PropTypes from "prop-types";
import { Box } from "@mui/material";

import { Spacing } from "../../../../layouts";
import { Icon } from "../../../Icons";

export const FabExpandedContent = ({ icon, label }) => (
  <>
    <Box
      sx={{
        display: "flex",
        flex: 1,
        marginRight: Spacing.DETAILS,
      }}
    >
      <Icon name={icon} />
    </Box>

    {label}
  </>
);

FabExpandedContent.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
