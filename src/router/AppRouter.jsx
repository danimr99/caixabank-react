import { Routes, Route, Navigate } from "react-router-dom";

import { Routes as RoutesList } from "../constants";
import {
  AccountsPage,
  BrokersPage,
  BrokerDetailsPage,
  TransactionsPage,
} from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={RoutesList.ACCOUNTS} element={<AccountsPage />} />
      <Route path={RoutesList.BROKERS} element={<BrokersPage />} />
      <Route path={RoutesList.BROKER_DETAILS} element={<BrokerDetailsPage />} />
      <Route path={RoutesList.TRANSACTIONS} element={<TransactionsPage />} />

      <Route path="/*" element={<Navigate to={RoutesList.ACCOUNTS} />} />
    </Routes>
  );
};
