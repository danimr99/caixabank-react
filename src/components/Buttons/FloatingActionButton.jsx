import PropTypes from "prop-types";
import { Fab } from "@mui/material";

import { Icons } from "../../constants";
import { Icon } from "../";

export const FloatingActionButton = ({ icon, onClick }) => {
  return (
    <Fab
      color="primary"
      aria-label={icon}
      sx={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
      }}
      onClick={onClick}
    >
      <Icon variant={icon} />
    </Fab>
  );
};

FloatingActionButton.propTypes = {
  icon: PropTypes.oneOf(Object.values(Icons)).isRequired,
  onClick: PropTypes.func.isRequired,
};
