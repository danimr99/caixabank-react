import PropTypes from "prop-types";
import {
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog as MuiDialog,
} from "@mui/material";

import { Spacing } from "../layouts";

export const Dialog = ({
  isOpened = false,
  title,
  instructions,
  children,
  PaperProps,
  onClose,
}) => {
  return (
    <MuiDialog open={isOpened} PaperProps={{ ...PaperProps }} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {instructions && (
          <DialogContentText
            sx={{
              marginBottom: Spacing.XS,
            }}
          >
            {instructions}
          </DialogContentText>
        )}
        {children}
      </DialogContent>
    </MuiDialog>
  );
};

Dialog.propTypes = {
  isOpened: PropTypes.bool,
  title: PropTypes.string.isRequired,
  instructions: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  PaperProps: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};
