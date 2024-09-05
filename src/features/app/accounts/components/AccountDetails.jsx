import PropTypes from "prop-types";
import { Grid } from "@mui/material";

import { Spacing } from "../../../../ui";
import { AccountBalanceView, AccountInformationView } from "../views";
import {
  CategoryHistoryView,
  IncomeOutcomeComparisonView,
  TransactionsView,
} from "../../views";

export const AccountDetails = ({ account }) => {
  return (
    <Grid container spacing={Spacing.MD}>
      <Grid item xs={12}>
        <AccountBalanceView balance={account?.balance} />
      </Grid>

      <Grid item xs={12} md={6}>
        <AccountInformationView
          bank={account?.bank}
          iban={account?.iban}
          isSharedAccount={account?.isSharedAccount}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <IncomeOutcomeComparisonView accounts={[account]} />
      </Grid>

      <Grid item xs={12}>
        <CategoryHistoryView accounts={[account]} />
      </Grid>

      <Grid item xs={12}>
        <TransactionsView accounts={[account]} />
      </Grid>
    </Grid>
  );
};

AccountDetails.propTypes = {
  account: PropTypes.shape({
    accountId: PropTypes.number.isRequired,
    bank: PropTypes.string.isRequired,
    accountAlias: PropTypes.string.isRequired,
    iban: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    transactions: PropTypes.array.isRequired,
    isSharedAccount: PropTypes.bool.isRequired,
  }).isRequired,
};
