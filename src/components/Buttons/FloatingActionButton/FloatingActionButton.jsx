import PropTypes from "prop-types";
import { Fab, useMediaQuery, Zoom } from "@mui/material";

import { Spacing } from "../../../layouts";
import { Icons, Icon } from "../../Icons";
import { Breakpoints } from "../../breakpoints";
import { FabExpandedContent } from "./ui/FabExpandedContent";

export const FloatingActionButton = ({
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
          marginBottom: Spacing.MD,
          marginRight: Spacing.MD,
        }}
        onClick={onClick}
      >
        {expandable && canExpand ? (
          <FabExpandedContent icon={icon} label={label} />
        ) : (
          <Icon name={icon} />
        )}
      </Fab>
    </Zoom>
  );
};

FloatingActionButton.propTypes = {
  icon: PropTypes.oneOf(Object.values(Icons)).isRequired,
  label: PropTypes.string.isRequired,
  expandable: PropTypes.bool,
  withAnimation: PropTypes.bool,
  onClick: PropTypes.func,
};
