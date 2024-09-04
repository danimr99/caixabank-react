import { useRef } from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";

import { getAssetIdByName } from "../../../../utils";
import {
  useGlobalDispatcher,
  useNavigation,
  useToggle,
} from "../../../../hooks";
import { deleteAccount } from "../../../../store";
import { useNotificationsContext } from "../../../../contexts";
import {
  BorderRadius,
  Chip,
  ImageAsset,
  MoneyText,
  NotificationTypes,
  OptionsMenu,
  OptionsMenuButton,
  Spacing,
} from "../../../../ui";

export const AccountCard = ({ account }) => {
  const { dispatch } = useGlobalDispatcher();
  const { navigateTo } = useNavigation();
  const { showNotification } = useNotificationsContext();
  const anchorRef = useRef(null);
  const {
    isOpened: isCardMenuOpened,
    open: openCardMenu,
    close: closeCardMenu,
  } = useToggle();

  const accountOptions = Object.freeze([
    {
      action: "show-details",
      label: "Show details",
      onClick: () => navigateTo(`/app/accounts/${account?.accountId}/details`),
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
  ]);

  const handleOpenCardMenu = (event) => {
    anchorRef.current = event?.currentTarget;
    openCardMenu();
  };

  const handleCloseCardMenu = () => {
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
              <ImageAsset name={getAssetIdByName(account?.bank)} />
            </Grid>

            <Grid item>
              <OptionsMenuButton onClick={handleOpenCardMenu} />
              <OptionsMenu
                anchor={anchorRef?.current}
                isOpened={isCardMenuOpened}
                options={accountOptions}
                onClose={handleCloseCardMenu}
              />
            </Grid>
          </Grid>

          <Stack
            direction="column"
            spacing={2}
            sx={{ paddingX: "16px" }}
            useFlexGap
          >
            <MoneyText amount={account?.balance} />

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
