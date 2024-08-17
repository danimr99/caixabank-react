import { Icons } from "./icons";
import { Routes } from "./routes";

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
