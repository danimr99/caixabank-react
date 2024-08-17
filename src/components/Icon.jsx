import PropTypes from "prop-types";

import { Icons } from "../constants/icons";
import {
  AccountBalance,
  Add,
  MoreVertOutlined,
  Payment,
  Receipt,
} from "@mui/icons-material";

export const Icon = ({ variant }) => {
  switch (variant) {
    case Icons.ACCOUNTS:
      return <Payment />;

    case Icons.BROKERS:
      return <AccountBalance />;

    case Icons.TRANSACTIONS:
      return <Receipt />;

    case Icons.ADD:
      return <Add />;

    case Icons.CARD_MENU:
      return <MoreVertOutlined />;

    default:
      throw new Error(`Icon ${variant} not found`);
  }
};

Icon.propTypes = {
  variant: PropTypes.string.isRequired,
};
