import PropTypes from "prop-types";
import { Fab } from "@mui/material";

import { Spacing } from "../../layouts";
import { Icons, Icon } from "../Icons";

export const FloatingActionButton = ({ icon, onClick }) => {
  return (
    <Fab
      color="primary"
      aria-label={icon}
      sx={{
        position: "absolute",
        bottom: Spacing.MD,
        right: Spacing.MD,
      }}
      onClick={onClick}
    >
      <Icon name={icon} />
    </Fab>
  );
};

FloatingActionButton.propTypes = {
  icon: PropTypes.oneOf(Object.values(Icons)).isRequired,
  onClick: PropTypes.func,
};
