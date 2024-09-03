const BROKERS_BASE_URL =
  "https://n47wv61fpe.execute-api.eu-west-1.amazonaws.com";

export const GET_ALL_BROKERS_URL = `${BROKERS_BASE_URL}/pro/brokers`;
export const GET_BROKER_DETAILS_URL = (brokerId) =>
  `${BROKERS_BASE_URL}/pro/brokers/details?id=${brokerId}`;
