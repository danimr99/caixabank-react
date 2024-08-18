import { Routes } from "../../constants/routes";
import { Icons } from "../Icons/icons";

export const NavigationBarLinks = Object.freeze([
  {
    label: "Accounts",
    icon: Icons.ACCOUNTS,
    path: Routes.ACCOUNTS,
  },
  {
    label: "Transactions",
    icon: Icons.TRANSACTIONS,
    path: Routes.TRANSACTIONS,
  },
  {
    label: "Brokers",
    icon: Icons.BROKERS,
    path: Routes.BROKERS,
  },
]);
