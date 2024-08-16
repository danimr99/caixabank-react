import PropTypes from "prop-types";

import { Icons } from "../../constants/icons";
import { AccountsIcon, BrokersIcon, TransactionsIcon } from "./variants";

export const CustomIcon = ({ iconName }) => {
  switch (iconName) {
    case Icons.ACCOUNTS:
      return <AccountsIcon />;

    case Icons.BROKERS:
      return <BrokersIcon />;

    case Icons.TRANSACTIONS:
      return <TransactionsIcon />;

    default:
      throw new Error(`Icon ${iconName} not found`);
  }
};

CustomIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
};
