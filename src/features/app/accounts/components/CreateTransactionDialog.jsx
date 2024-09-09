import PropTypes from "prop-types";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { Stack } from "@mui/material";

import { TransactionTypes } from "../../../../constants";
import { useGlobalDispatcher, useGlobalState } from "../../../../hooks";
import { useNotificationsContext } from "../../../../contexts";
import {
  Dialog,
  Input,
  InputTypes,
  InputValidations,
  NotificationTypes,
  Select,
  Spacing,
} from "../../../../ui";
import {
  createTransaction,
  createTransference,
  Stores,
} from "../../../../store";
import { toMoney } from "../../../../utils";

const INITIAL_FORM_VALUES = Object.freeze({
  transactionType: "",
  concept: "",
  amount: "",
  destinationAccountId: "",
});

export const CreateTransactionDialog = ({
  isOpened = false,
  account,
  onClose,
}) => {
  const { accounts } = useGlobalState(Stores.ACCOUNTS);
  const { dispatch } = useGlobalDispatcher();
  const { showNotification } = useNotificationsContext();
  const { handleSubmit, control, watch, reset } = useForm({
    defaultValues: INITIAL_FORM_VALUES,
  });
  const transactionType = watch("transactionType");
  const amountValidations = useMemo(
    () =>
      Object.fromEntries(
        Object.entries({
          ...InputValidations.REQUIRED("Amount"),
          ...InputValidations.MIN("Amount", 0, { isMoney: true }),
          ...([TransactionTypes.WITHDRAWAL, TransactionTypes.TRANSFER].includes(
            transactionType
          )
            ? InputValidations.MAX("Amount", account?.balance, {
                isMoney: true,
              })
            : InputValidations.MAX("Amount", 1000000, { isMoney: true })),
        }).filter(([, value]) => Boolean(value))
      ),
    [transactionType, account?.balance]
  );

  const DESTINATION_ACCOUNTS = useMemo(
    () =>
      accounts
        ?.filter(
          (filterAccount) => filterAccount?.accountId !== account?.accountId
        )
        .map((account) => ({
          name: account?.iban,
          label: account?.accountAlias,
          value: account?.accountId,
        })),
    [accounts, account?.accountId]
  );

  const TRANSACTION_TYPES = useMemo(
    () =>
      Object.entries(
        Object.values(TransactionTypes).filter((type) => {
          if (type === TransactionTypes.TRANSFER) {
            return DESTINATION_ACCOUNTS?.length > 0;
          }

          return true;
        })
      ).map(([key, value]) => ({
        name: key?.toLowerCase(),
        label: value,
        value,
      })),
    [DESTINATION_ACCOUNTS]
  );

  const closeDialog = () => {
    reset(INITIAL_FORM_VALUES);
    onClose();
  };

  const onSubmitForm = (data) => {
    dispatch(
      transactionType === TransactionTypes.TRANSFER
        ? createTransference({ accountId: account?.accountId, ...data })
        : createTransaction({ accountId: account?.accountId, ...data })
    );
    closeDialog();
    showNotification(
      NotificationTypes.SUCCESS,
      `${
        transactionType === TransactionTypes.TRANSFER
          ? "Transference"
          : transactionType
      } completed successfully`,
      transactionType === TransactionTypes.TRANSFER
        ? `Your transference to "${
            DESTINATION_ACCOUNTS?.find(
              (destinationAccount) =>
                destinationAccount?.value === data?.destinationAccountId
            )?.label
          }" has been completed with an amount of ${toMoney(data?.amount)}.`
        : `Your ${transactionType?.toLowerCase()} "${
            data?.concept
          }" has been completed with an amount of ${toMoney(data?.amount)}.`
    );
  };

  return (
    <Dialog
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit(onSubmitForm),
      }}
      isOpened={isOpened}
      title={
        transactionType
          ? `New ${transactionType?.toLowerCase()}`
          : "New transaction"
      }
      instructions="Fill in the following fields to submit your transaction:"
      actions={[
        {
          key: "cancel",
          label: "Cancel",
          onClick: closeDialog,
        },
        {
          key: "submit",
          label: "Confirm",
          onClick: handleSubmit(onSubmitForm),
        },
      ]}
      onClose={closeDialog}
    >
      <Stack spacing={Spacing.MD}>
        {!transactionType && (
          <Select
            name="transactionType"
            label="Transaction type"
            options={TRANSACTION_TYPES}
            helperText="Select a transaction type"
            control={control}
            validations={{ ...InputValidations.REQUIRED("Transaction type") }}
            fullWidth
          />
        )}
        {transactionType && (
          <>
            {transactionType !== TransactionTypes.TRANSFER && (
              <Input
                type={InputTypes.TEXT}
                name="concept"
                label="Transaction concept"
                placeholder="Example: Rent"
                helperText="Introduce a concept for the transaction"
                control={control}
                validations={{
                  ...InputValidations.REQUIRED("Concept"),
                  ...InputValidations.MAX_LENGTH("Concept", 30),
                }}
                fullWidth
              />
            )}
            <Input
              type={InputTypes.CURRENCY}
              name="amount"
              label="Amount"
              placeholder="Example: 3000"
              helperText="Introduce an amount for your transaction"
              control={control}
              validations={amountValidations}
              fullWidth
            />
            {transactionType === TransactionTypes.TRANSFER && (
              <Select
                name="destinationAccountId"
                label="Destination account"
                options={DESTINATION_ACCOUNTS}
                helperText="Select a destination account"
                control={control}
                validations={{
                  ...InputValidations.REQUIRED("Destination account"),
                }}
                fullWidth
              />
            )}
          </>
        )}
      </Stack>
    </Dialog>
  );
};

CreateTransactionDialog.propTypes = {
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
