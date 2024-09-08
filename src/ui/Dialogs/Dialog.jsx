import PropTypes from "prop-types";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog as MuiDialog,
  useMediaQuery,
} from "@mui/material";

import { Breakpoints, Spacing } from "../layouts";

export const Dialog = ({
  isOpened = false,
  title,
  instructions,
  children,
  actions,
  PaperProps,
  onClose,
}) => {
  const fullscreen = useMediaQuery((theme) =>
    theme?.breakpoints?.down(Breakpoints.MD)
  );

  return (
    <MuiDialog
      open={isOpened}
      fullScreen={fullscreen}
      PaperProps={{ ...PaperProps }}
      onClose={onClose}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
      <DialogActions>
        {actions?.map((action) => (
          <Button key={action?.key} onClick={action?.onClick}>
            {action?.label}
          </Button>
        ))}
      </DialogActions>
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
  ]),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ).isRequired,
  PaperProps: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};
