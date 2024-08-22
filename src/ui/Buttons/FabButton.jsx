import PropTypes from "prop-types";
import { Box, Fab, useMediaQuery, Zoom } from "@mui/material";

import { Breakpoints, Spacing } from "..";
import { Icon, Icons } from "../Icon";

export const FabButton = ({
  icon,
  label,
  expandable = false,
  withAnimation = false,
  onClick,
}) => {
  const canExpand = useMediaQuery((theme) =>
    theme?.breakpoints?.up(Breakpoints.MD)
  );

  return (
    <Zoom in={withAnimation}>
      <Fab
        color="primary"
        aria-label={icon}
        variant={expandable && canExpand ? "extended" : "circular"}
        sx={{
          position: "fixed",
          bottom: 0,
          right: 0,
          marginBottom: { xs: Spacing.MD, sm: Spacing.LG },
          marginRight: { xs: Spacing.MD, sm: Spacing.LG },
        }}
        onClick={onClick}
      >
        {expandable && canExpand ? (
          <FabExpanded icon={icon} label={label} />
        ) : (
          <Icon name={icon} />
        )}
      </Fab>
    </Zoom>
  );
};

FabButton.propTypes = {
  icon: PropTypes.oneOf(Object.values(Icons)).isRequired,
  label: PropTypes.string.isRequired,
  expandable: PropTypes.bool,
  withAnimation: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

const FabExpanded = ({ icon, label }) => (
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

FabExpanded.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
