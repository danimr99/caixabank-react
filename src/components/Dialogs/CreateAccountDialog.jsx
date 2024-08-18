import PropTypes from "prop-types";
import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { Banks } from "../../constants";
import {
  lengthValidationFn,
  numericRangeValidationFn,
  numericValidationFn,
  requiredValidationFn,
  toMoney,
} from "../../utils";
import { useForm, useGlobalDispatcher } from "../../hooks";
import { addAccount } from "../../store";
import { Spacing } from "../../layouts";
import { Button, Checkbox, Input, Select } from "../";

const formData = Object.freeze({
  accountAlias: "",
  initialDeposit: "",
  bank: "",
  isSharedAccount: false,
});

const formValidations = Object.freeze({
  accountAlias: [
    {
      validationFn: (value) => requiredValidationFn(value),
      errorMessage: "The account alias is required",
    },
    {
      validationFn: (value) =>
        lengthValidationFn(value, {
          min: 0,
          minIncluded: true,
          max: 30,
          maxIncluded: true,
        }),
      errorMessage: "The account alias must be 30 characters or less",
    },
  ],
  initialDeposit: [
    {
      validationFn: (value) => requiredValidationFn(value),
      errorMessage: "The initial deposit is required",
    },
    {
      validationFn: (value) => numericValidationFn(value),
      errorMessage: "The initial deposit must be a valid number",
    },
    {
      validationFn: (value) =>
        numericRangeValidationFn(value, {
          min: 0,
          minIncluded: false,
          max: 100000,
          maxIncluded: true,
        }),
      errorMessage: `The initial deposit must be between ${toMoney(
        0
      )} and ${toMoney(100000)}`,
    },
  ],
  bank: [
    {
      validationFn: (value) => requiredValidationFn(value),
      errorMessage: "The banking entity is required",
    },
  ],
});

const selectOptionsList = Object.entries(Banks).map(([key, value]) => ({
  name: key.toLowerCase(),
  label: value,
  value,
}));

export const CreateAccountDialog = ({ isOpened = false, onClose }) => {
  const { dispatch } = useGlobalDispatcher();
  const {
    formValues,
    formErrors,
    isFormValid,
    handleInputChange,
    handleSelectionChange,
    handleCheckboxChange,
    resetForm,
  } = useForm(formData, formValidations);

  const closeDialog = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid) {
      dispatch(addAccount(formValues));
    }

    closeDialog();
  };

  return (
    <Dialog
      open={isOpened}
      onClose={closeDialog}
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit,
      }}
    >
      <DialogTitle>New account</DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            marginBottom: Spacing.XS,
          }}
        >
          Fill all the following fields to create a new account.
        </DialogContentText>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            columnGap: Spacing.XS,
          }}
        >
          <Input
            name={Object.keys(formData)[0]}
            label="Account alias"
            value={formValues?.accountAlias}
            placeholder="e.g. Savings"
            helperText={
              isFormValid
                ? "Introduce an alias for the account"
                : formErrors?.accountAlias
            }
            hasError={formErrors?.accountAlias ? true : false}
            fullWidth
            required
            onChange={handleInputChange}
          />
          <Input
            name="initialDeposit"
            label="Initial deposit"
            value={formValues?.initialDeposit}
            placeholder="e.g. 3000"
            helperText={
              isFormValid
                ? "Introduce an amount for your initial deposit"
                : formErrors?.bank
            }
            hasError={formErrors?.initialDeposit}
            fullWidth
            required
            onChange={handleInputChange}
          />
          <Select
            name="bank"
            label="Banking entity"
            options={selectOptionsList}
            selectedValue={formValues?.bank}
            helperText={
              isFormValid
                ? "Select the banking entity for the account"
                : formErrors?.bank
            }
            hasError={formErrors?.bank}
            fullWidth
            required
            onChange={handleSelectionChange}
          />
          <Checkbox
            name={Object.keys(formData)[3]}
            label="I would like to share this account"
            isChecked={formValues?.isSharedAccount}
            onChange={handleCheckboxChange}
          />
        </Box>

        <Box
          sx={{
            marginTop: Spacing.LG,
          }}
        >
          <Button type="submit" label="Create account" fullWidth />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

CreateAccountDialog.propTypes = {
  isOpened: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};
