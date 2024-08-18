import PropTypes from "prop-types";
import { IconButton } from "@mui/material";

import { Icon, Icons } from "../";

export const CardMenuButton = ({ onClick }) => {
  return (
    <IconButton aria-controls="menu" aria-haspopup onClick={onClick}>
      <Icon name={Icons.CARD_MENU} />
    </IconButton>
  );
};

CardMenuButton.propTypes = {
  onClick: PropTypes.func,
};
