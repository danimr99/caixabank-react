import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

import { GET_BROKER_DETAILS_URL } from "../api";
import { mapBrokerData } from "../../../../utils";
import { useFetch, useNavigation } from "../../../../hooks";
import { PageLayout } from "../../layouts";
import {
  Alert,
  Icons,
  LoadingIndicator,
  NotificationTypes,
} from "../../../../ui";
import { BrokerDetails } from "../components";

export const BrokerDetailsPage = () => {
  const { navigateToExternal } = useNavigation();
  const { brokerId } = useParams();
  const { data, loading, error, fetchData } = useFetch(
    GET_BROKER_DETAILS_URL(brokerId)
  );
  const brokerDetails = useMemo(() => mapBrokerData(data), [data]);

  useEffect(() => {
    fetchData();
  }, []);

  const visitBrokerWebsite = () => {
    if (brokerDetails?.website) {
      navigateToExternal(brokerDetails.website, { openInNewTab: true });
    }
  };

  return (
    <PageLayout
      title={brokerDetails?.name ?? "Broker details"}
      showGoBackButton
      showFabButton={!!brokerDetails?.website}
      fab={{
        icon: Icons.LINK,
        label: "Visit website",
        onClick: visitBrokerWebsite,
      }}
    >
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          {brokerDetails?.name && <BrokerDetails details={brokerDetails} />}

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
