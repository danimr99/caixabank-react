import PropTypes from "prop-types";
import { IconButton } from "@mui/material";

import { Icons } from "../../constants";
import { Icon } from "../";

export const CardMenuButton = ({ onClick }) => {
  return (
    <IconButton aria-controls="menu" aria-haspopup onClick={onClick}>
      <Icon variant={Icons.CARD_MENU} />
    </IconButton>
  );
};

CardMenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
