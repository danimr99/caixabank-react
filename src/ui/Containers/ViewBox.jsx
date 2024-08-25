import PropTypes from "prop-types";
import { Card, Typography } from "@mui/material";
import { BorderRadius, Spacing } from "../layouts";

export const ViewBox = ({ children, title }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "background.paper",
        borderRadius: BorderRadius.MD,
        paddingX: Spacing.LG,
        paddingY: Spacing.MD,
      }}
    >
      {title && (
        <Typography
          variant="h6"
          fontWeight={500}
          sx={{
            marginBottom: Spacing.MD,
          }}
        >
          {title}
        </Typography>
      )}
      {children}
    </Card>
  );
};

ViewBox.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
