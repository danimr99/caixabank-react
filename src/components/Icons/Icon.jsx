import PropTypes from "prop-types";
import {
  AccountBalance,
  Add,
  ArrowBack,
  ChevronLeftOutlined,
  ChevronRightOutlined,
  MenuOutlined,
  MoreVertOutlined,
  Payment,
  PeopleRounded,
  Receipt,
} from "@mui/icons-material";

import { Colors } from "../colors";
import { Icons, IconSizes } from "./icons";

export const Icon = ({ name, color, size = IconSizes.MEDIUM }) => {
  switch (name) {
    case Icons.ACCOUNTS:
      return <Payment color={color} fontSize={size} />;

    case Icons.BROKERS:
      return <AccountBalance color={color} fontSize={size} />;

    case Icons.TRANSACTIONS:
      return <Receipt color={color} fontSize={size} />;

    case Icons.ADD:
      return <Add color={color} fontSize={size} />;

    case Icons.CARD_MENU:
      return <MoreVertOutlined color={color} fontSize={size} />;

    case Icons.NAVIGATION_BAR_MENU:
      return <MenuOutlined color={color} fontSize={size} />;

    case Icons.NAVIGATION_BAR_MENU_HEADER_LEFT:
      return <ChevronLeftOutlined color={color} fontSize={size} />;

    case Icons.NAVIGATION_BAR_MENU_HEADER_RIGHT:
      return <ChevronRightOutlined color={color} fontSize={size} />;

    case Icons.GO_BACK:
      return <ArrowBack color={color} fontSize={size} />;

    case Icons.SHARED_ACCOUNT:
      return <PeopleRounded color={color} fontSize={size} />;

    default:
      throw new Error(`Icon ${name} not found`);
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.oneOfType([
    PropTypes.oneOf(Object.values(Colors)),
    PropTypes.string,
  ]),
  size: PropTypes.oneOfType([
    PropTypes.oneOf(Object.values(IconSizes)),
    PropTypes.string,
  ]),
};
