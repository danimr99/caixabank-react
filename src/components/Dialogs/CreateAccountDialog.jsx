import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
} from "@mui/material";

import { Banks } from "../../constants";
import { toMoney } from "../../utils";
import { useGlobalDispatcher } from "../../hooks";
import { addAccount } from "../../store";
import { Spacing } from "../../layouts";
import {
  NotificationTypes,
  Button,
  Checkbox,
  Input,
  InputTypes,
  InputValidations,
  Select,
} from "../";

const initialFormValues = Object.freeze({
  accountAlias: "",
  initialDeposit: "",
  bank: "",
  isSharedAccount: false,
});

const bankOptionsList = Object.freeze(
  Object.entries(Banks).map(([key, value]) => ({
    name: key.toLowerCase(),
    label: value,
    value,
  }))
);

export const CreateAccountDialog = ({
  isOpened = false,
  onClose,
  showNotification,
}) => {
  const { dispatch } = useGlobalDispatcher();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: initialFormValues,
  });

  const closeDialog = () => {
    reset(initialFormValues);
    onClose();
  };

  const onSubmitForm = (data) => {
    dispatch(addAccount(data));
    closeDialog();
    showNotification(
      NotificationTypes.SUCCESS,
      "Account created successfully!",
      `Your new account "${
        data?.accountAlias
      }" has been created with an initial deposit of ${toMoney(
        data?.initialDeposit
      )}.`
    );
  };

  return (
    <Dialog
      open={isOpened}
      onClose={closeDialog}
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit(onSubmitForm),
      }}
    >
      <DialogTitle>Create new account</DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            marginBottom: Spacing.XS,
          }}
        >
          Fill all the following fields to create a new account.
        </DialogContentText>

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
              ...InputValidations.MIN("Initial deposit", 0),
              ...InputValidations.MAX("Initial deposit", 1000000),
            }}
            fullWidth
          />
          <Select
            name="bank"
            label="Banking entity"
            options={bankOptionsList}
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

          <Button type="submit" label="Create account" fullWidth />
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

CreateAccountDialog.propTypes = {
  isOpened: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  showNotification: PropTypes.func,
};
