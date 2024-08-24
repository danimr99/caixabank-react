import PropTypes from "prop-types";
import { Link as MuiLink } from "@mui/material";

import { useNavigation } from "../../hooks";

export const Link = ({ label, path, sx }) => {
  const { navigateTo } = useNavigation();

  return (
    <MuiLink
      component="button"
      underline="hover"
      onClick={() => navigateTo(path, { replace: true })}
      sx={sx}
    >
      {label}
    </MuiLink>
  );
};

Link.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  sx: PropTypes.object,
};
