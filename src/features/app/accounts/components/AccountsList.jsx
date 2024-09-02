import PropTypes from "prop-types";

import { GridList } from "../../../../ui";
import { AccountCard } from "./AccountCard";

export const AccountsList = ({ accounts = [] }) => (
  <GridList>
    {accounts?.map((account) => (
      <AccountCard key={account?.accountId} account={account} />
    ))}
  </GridList>
);

AccountsList.propTypes = {
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      accountId: PropTypes.number.isRequired,
      bank: PropTypes.string.isRequired,
      accountAlias: PropTypes.string.isRequired,
      iban: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
      isSharedAccount: PropTypes.bool.isRequired,
    })
  ),
};
