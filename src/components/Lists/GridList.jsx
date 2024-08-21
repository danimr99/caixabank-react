import { Children } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";

export const GridList = ({
  children,
  itemColumnsBySize = {
    xs: 12,
    sm: 12,
    md: 6,
    lg: 6,
    xl: 6,
  },
  spacing = 3,
}) => {
  return (
    <Grid container spacing={spacing}>
      {Children.map(children, (child) => (
        <Grid
          item
          xs={itemColumnsBySize?.xs}
          sm={itemColumnsBySize?.sm}
          md={itemColumnsBySize?.md}
          lg={itemColumnsBySize?.lg}
          xl={itemColumnsBySize?.xl}
        >
          {child}
        </Grid>
      ))}
    </Grid>
  );
};

GridList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  itemColumnsBySize: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
  }),
  spacing: PropTypes.number,
};
