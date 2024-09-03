import { useEffect } from "react";
import { Button } from "@mui/material";

import { GET_ALL_BROKERS_URL } from "../api";
import { mapBrokerData } from "../../../../utils";
import { useFetch } from "../../../../hooks";
import { PageLayout } from "../../layouts";
import { Alert, NotificationTypes, LoadingIndicator } from "../../../../ui";
import { BrokersList } from "../components";

export const BrokersPage = () => {
  const {
    data: brokers,
    loading,
    error,
    fetchData,
  } = useFetch(GET_ALL_BROKERS_URL);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <PageLayout title="Brokers">
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          {brokers?.length > 0 && (
            <BrokersList
              brokers={brokers?.map((broker) => mapBrokerData(broker))}
            />
          )}

          {brokers?.length === 0 && (
            <Alert
              type={NotificationTypes.INFO}
              title="No brokers"
              message="There are no brokers available."
            />
          )}

          {error && (
            <Alert
              type={NotificationTypes.ERROR}
              title="Error"
              message="An error occurred while fetching brokers."
              action={
                <Button color="inherit" size="small" onClick={fetchData}>
                  Retry
                </Button>
              }
            />
          )}
        </>
      )}
    </PageLayout>
  );
};
