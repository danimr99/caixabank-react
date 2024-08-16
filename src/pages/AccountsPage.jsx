import { useGlobalState } from "../hooks/useGlobalState";
import { MainLayout } from "../layouts";

export const AccountsPage = () => {
  const { accounts } = useGlobalState("accounts");

  return (
    <MainLayout>
      <h1>My Accounts</h1>

      <section>
        <pre>{JSON.stringify(accounts, null, 2)}</pre>
      </section>
    </MainLayout>
  );
};
