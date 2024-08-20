import { Children } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";

export const List = ({
  children,
  itemsBySize = {
    xs: 1,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
  },
  spacing = 2,
}) => {
  return (
    <Grid container spacing={spacing}>
      {Children.map(children, (child) => (
        <Grid
          item
          xs={12 / itemsBySize?.xs}
          sm={12 / itemsBySize?.sm}
          md={12 / itemsBySize?.md}
          lg={12 / itemsBySize?.lg}
          xl={12 / itemsBySize?.xl}
        >
          {child}
        </Grid>
      ))}
    </Grid>
  );
};

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  itemsBySize: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
  }),
  spacing: PropTypes.number,
};
