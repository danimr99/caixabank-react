import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Stack } from "@mui/material";

import { useGlobalDispatcher } from "../../../../hooks";
import { useNotificationsContext } from "../../../../contexts";
import { renameAccount } from "../../../../store";
import {
  Dialog,
  Input,
  InputTypes,
  InputValidations,
  NotificationTypes,
  Spacing,
} from "../../../../ui";

const INITIAL_FORM_VALUES = Object.freeze({
  newAccountAlias: "",
});

export const RenameAccountDialog = ({ isOpened = false, account, onClose }) => {
  const { dispatch } = useGlobalDispatcher();
  const { showNotification } = useNotificationsContext();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: INITIAL_FORM_VALUES,
  });

  const closeDialog = () => {
    reset(INITIAL_FORM_VALUES);
    onClose();
  };

  const onSubmitForm = (data) => {
    dispatch(
      renameAccount({
        accountId: account?.accountId,
        newAccountAlias: data?.newAccountAlias,
      })
    );
    closeDialog();
    showNotification(
      NotificationTypes.SUCCESS,
      "Account renamed successfully",
      `Your account has been renamed to "${data?.newAccountAlias}".`
    );
  };

  return (
    <Dialog
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit(onSubmitForm),
      }}
      isOpened={isOpened}
      title="Rename account"
      instructions="Enter the new name for your account."
      actions={[
        {
          key: "cancel",
          label: "Cancel",
          onClick: closeDialog,
        },
        {
          key: "confirm",
          label: "Rename account",
          onClick: handleSubmit(onSubmitForm),
        },
      ]}
      onClose={closeDialog}
    >
      <Stack spacing={Spacing.MD}>
        <Input
          type={InputTypes.TEXT}
          name="newAccountAlias"
          label="New account alias"
          placeholder="Example: Savings"
          helperText="Introduce a new alias for the account"
          control={control}
          validations={{
            ...InputValidations.REQUIRED("New account alias"),
            ...InputValidations.MAX_LENGTH("New account alias", 30),
          }}
          fullWidth
        />
      </Stack>
    </Dialog>
  );
};

RenameAccountDialog.propTypes = {
  isOpened: PropTypes.bool,
  account: PropTypes.shape({
    accountId: PropTypes.number,
    bank: PropTypes.string,
    accountAlias: PropTypes.string,
    iban: PropTypes.string,
    balance: PropTypes.number,
    isSharedAccount: PropTypes.bool,
  }),
  onClose: PropTypes.func.isRequired,
};
