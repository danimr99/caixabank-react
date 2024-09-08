import PropTypes from "prop-types";
import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";

import { getAssetIdByName } from "../../../../utils";
import { useAccountOperationsContext } from "../contexts";
import {
  BorderRadius,
  Chip,
  ImageAsset,
  MoneyText,
  OptionsMenu,
  OptionsMenuButton,
  Spacing,
  useOptionsMenu,
} from "../../../../ui";

export const AccountCard = ({ account }) => {
  const {
    selectAccount,
    showAccountDetails: { navigateToAccountDetails },
    createTransaction: { openCreateTransactionDialog },
    renameAccount: { openRenameAccountDialog },
    deleteAccount: { openDeleteAccountConfirmationDialog },
  } = useAccountOperationsContext();
  const { anchorRef, isMenuOpened, handleOpenMenu, handleCloseMenu } =
    useOptionsMenu();

  const accountOptions = Object.freeze([
    {
      action: "show-details",
      label: "Show details",
      onClick: () => {
        selectAccount(account);
        navigateToAccountDetails();
      },
    },
    {
      action: "create-transaction",
      label: "Create transaction",
      onClick: () => {
        selectAccount(account);
        openCreateTransactionDialog();
      },
    },
    {
      action: "rename-account",
      label: "Rename account",
      onClick: () => {
        selectAccount(account);
        openRenameAccountDialog();
      },
    },
    {
      action: "delete-account",
      label: "Delete account",
      sx: { color: "error.main" },
      onClick: () => {
        selectAccount(account);
        openDeleteAccountConfirmationDialog();
      },
    },
  ]);

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
              <OptionsMenuButton onClick={handleOpenMenu} />
              <OptionsMenu
                anchor={anchorRef?.current}
                isOpened={isMenuOpened}
                options={accountOptions}
                onClose={handleCloseMenu}
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
