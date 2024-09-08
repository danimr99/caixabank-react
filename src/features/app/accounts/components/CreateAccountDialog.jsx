import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Stack } from "@mui/material";

import { Banks } from "../../../../constants";
import { toMoney } from "../../../../utils";
import { useGlobalDispatcher } from "../../../../hooks";
import { useNotificationsContext } from "../../../../contexts";
import { addAccount } from "../../../../store";
import {
  Checkbox,
  Dialog,
  Input,
  InputTypes,
  InputValidations,
  NotificationTypes,
  Select,
  Spacing,
} from "../../../../ui";

const INITIAL_FORM_VALUES = Object.freeze({
  accountAlias: "",
  initialDeposit: "",
  bank: "",
  isSharedAccount: false,
});

const BANKING_OPTIONS = Object.freeze(
  Object.entries(Banks).map(([key, value]) => ({
    name: key?.toLowerCase(),
    label: value,
    value,
  }))
);

export const CreateAccountDialog = ({ isOpened = false, onClose }) => {
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
    dispatch(addAccount(data));
    closeDialog();
    showNotification(
      NotificationTypes.SUCCESS,
      "Account created successfully",
      `Your new account "${
        data?.accountAlias
      }" has been created with an initial deposit of ${toMoney(
        data?.initialDeposit
      )}.`
    );
  };

  return (
    <Dialog
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit(onSubmitForm),
      }}
      isOpened={isOpened}
      title="New account"
      instructions="Fill in the following fields to create a new account:"
      actions={[
        {
          key: "cancel",
          label: "Cancel",
          onClick: closeDialog,
        },
        {
          key: "submit",
          label: "Create account",
          onClick: handleSubmit(onSubmitForm),
        },
      ]}
      onClose={closeDialog}
    >
      <Stack spacing={Spacing.MD}>
        <Input
          type={InputTypes.TEXT}
          name="accountAlias"
          label="Account alias"
          placeholder="Example: Savings"
          helperText="Introduce an alias for the account"
          control={control}
          validations={{
            ...InputValidations.REQUIRED("Account alias"),
            ...InputValidations.MAX_LENGTH("Account alias", 30),
          }}
          fullWidth
        />
        <Input
          type={InputTypes.CURRENCY}
          name="initialDeposit"
          label="Initial deposit"
          placeholder="Example: 3000"
          helperText="Introduce an amount for your initial deposit"
          control={control}
          validations={{
            ...InputValidations.REQUIRED("Initial deposit"),
            ...InputValidations.MIN("Initial deposit", 0, { isMoney: true }),
            ...InputValidations.MAX("Initial deposit", 1000000, {
              isMoney: true,
            }),
          }}
          fullWidth
        />
        <Select
          name="bank"
          label="Banking entity"
          options={BANKING_OPTIONS}
          helperText="Select a banking entity for the account"
          control={control}
          validations={{ ...InputValidations.REQUIRED("Banking entity") }}
          fullWidth
        />
        <Checkbox
          name="isSharedAccount"
          label="I would like to share this account"
          control={control}
        />
      </Stack>
    </Dialog>
  );
};

CreateAccountDialog.propTypes = {
  isOpened: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};
