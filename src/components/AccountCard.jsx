import { useRef } from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";

import { getLogoIdByName, toMoney } from "../utils";
import { useGlobalDispatcher, useToggle } from "../hooks";
import { deleteAccount } from "../store";
import { useNotificationsContext } from "../contexts";
import {
  BorderRadius,
  Chip,
  Logo,
  NotificationTypes,
  OptionsMenu,
  OptionsMenuButton,
  Spacing,
} from "../ui";

export const AccountCard = ({ account }) => {
  const { dispatch } = useGlobalDispatcher();
  const { showNotification } = useNotificationsContext();
  const anchorRef = useRef(null);
  const {
    isOpened: isCardMenuOpened,
    open: openCardMenu,
    close: closeCardMenu,
  } = useToggle();

  const accountOptions = [
    {
      action: "show-details",
      label: "Show details",
      onClick: () => console.log("Show details"),
    },
    {
      action: "delete-account",
      label: "Delete account",
      sx: { color: "error.main" },
      onClick: () => {
        dispatch(deleteAccount({ accountId: account?.accountId }));
        showNotification(
          NotificationTypes.SUCCESS,
          "Account deleted successfully",
          `Your account "${account?.accountAlias}" has been deleted.`
        );
      },
    },
  ];

  const handleOpenCardMenu = (event) => {
    anchorRef.current = event?.currentTarget;
    openCardMenu();
  };

  const handleClosCardMenu = () => {
    anchorRef.current = null;
    closeCardMenu();
  };

  return (
    <Card sx={{ borderRadius: BorderRadius.MD }}>
      <CardContent>
        <Stack direction="column" spacing={1}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Logo name={getLogoIdByName(account?.bank)} />
            </Grid>

            <Grid item>
              <OptionsMenuButton onClick={handleOpenCardMenu} />
              <OptionsMenu
                anchor={anchorRef?.current}
                isOpened={isCardMenuOpened}
                options={accountOptions}
                onClose={handleClosCardMenu}
              />
            </Grid>
          </Grid>

          <Stack
            direction="column"
            spacing={2}
            sx={{ paddingX: "16px" }}
            useFlexGap
          >
            <Typography
              variant="h4"
              color={(theme) =>
                account?.balance < 0
                  ? theme?.palette?.error?.main
                  : theme?.palette?.text?.primary
              }
              fontWeight={600}
            >
              {toMoney(account?.balance)}
            </Typography>

            <Grid container direction="column">
              <Grid item>
                <Typography variant="h6">{account?.accountAlias}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" color="text.secondary">
                  {account?.iban}
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              direction="row"
              spacing={1}
              sx={{
                minHeight: Spacing.XL,
                marginTop: Spacing.DETAILS,
              }}
            >
              {account?.isSharedAccount && (
                <Grid item>
                  <Chip
                    label="Shared"
                    sx={{
                      fontWeight: 600,
                      color: "text.secondary",
                    }}
                  />
                </Grid>
              )}
            </Grid>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

AccountCard.propTypes = {
  account: PropTypes.shape({
    accountId: PropTypes.number.isRequired,
    bank: PropTypes.string.isRequired,
    accountAlias: PropTypes.string.isRequired,
    iban: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    isSharedAccount: PropTypes.bool.isRequired,
  }).isRequired,
};
