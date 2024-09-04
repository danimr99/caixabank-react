import { useParams } from "react-router-dom";

import { toNumber } from "../../../../utils";
import { useGlobalState } from "../../../../hooks";
import { Stores } from "../../../../store";
import { PageLayout } from "../../layouts";

export const AccountsDetailsPage = () => {
  const { accounts } = useGlobalState(Stores.ACCOUNTS);
  const { accountId } = useParams();
  const account = accounts.find(
    (account) => account?.accountId === toNumber(accountId)
  );

  return (
    <PageLayout title={account?.accountAlias} showGoBackButton>
      AccountsDetailsPage
    </PageLayout>
  );
};
