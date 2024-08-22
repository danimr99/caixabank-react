import PropTypes from "prop-types";
import { IconButton } from "@mui/material";

import { Icon, Icons } from "../";

export const OptionsMenuButton = ({ onClick }) => {
  return (
    <IconButton aria-controls="menu" aria-haspopup onClick={onClick}>
      <Icon name={Icons.CARD_MENU} />
    </IconButton>
  );
};

OptionsMenuButton.propTypes = {
  onClick: PropTypes.func,
};
