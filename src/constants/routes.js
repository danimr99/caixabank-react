export const Routes = Object.freeze({
  ACCOUNTS: "/app/accounts",
  ACCOUNT_DETAILS: (accountId) => `/app/accounts/${accountId}/details`,
  BROKER_DETAILS: (brokerId) => `/app/brokers/${brokerId}/details`,
});
