import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

import { GET_BROKER_DETAILS_URL } from "../api";
import { mapBrokerData } from "../../../../utils";
import { useFetch } from "../../../../hooks";
import { PageLayout } from "../../layouts";
import { Alert, LoadingIndicator, NotificationTypes } from "../../../../ui";

export const BrokerDetailsPage = () => {
  const { brokerId } = useParams();
  const { data, loading, error, fetchData } = useFetch(
    GET_BROKER_DETAILS_URL(brokerId)
  );
  const brokerDetails = useMemo(() => mapBrokerData(data), [data]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <PageLayout
      title={brokerDetails?.name ?? "Broker details"}
      showGoBackButton
    >
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          {brokerDetails?.name && (
            <pre>{JSON.stringify(brokerDetails, null, 2)}</pre>
          )}

          {error && (
            <Alert
              type={NotificationTypes.ERROR}
              title="Error"
              message={`Broker with ID "${brokerId}" not found.`}
            />
          )}
        </>
      )}
    </PageLayout>
  );
};
