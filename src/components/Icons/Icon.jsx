import PropTypes from "prop-types";
import {
  AccountBalance,
  Add,
  ChevronLeftOutlined,
  ChevronRightOutlined,
  MenuOutlined,
  MoreVertOutlined,
  Payment,
  Receipt,
} from "@mui/icons-material";

import { Icons } from "./";

export const Icon = ({ name }) => {
  switch (name) {
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

    case Icons.NAVIGATION_BAR_MENU:
      return <MenuOutlined />;

    case Icons.NAVIGATION_BAR_MENU_HEADER_LEFT:
      return <ChevronLeftOutlined />;

    case Icons.NAVIGATION_BAR_MENU_HEADER_RIGHT:
      return <ChevronRightOutlined />;

    default:
      throw new Error(`Icon ${name} not found`);
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};
