import PropTypes from "prop-types";
import { Button } from "@mui/material";

export const RoundedButton = ({ label, disabled = false, onClick }) => {
  return (
    <Button variant="contained" disabled={disabled} onClick={onClick}>
      {label}
    </Button>
  );
};

RoundedButton.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
