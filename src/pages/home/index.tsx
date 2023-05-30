import { Account, HeroTab, NoAccount } from "@/core/components/HomePage";
import { getToken } from "@/services/auth.service";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState<string>("active");
  const [activeAccounts, setActiveAccounts] = useState<any[]>([]);
  const [inActiveAccounts, setInActiveAccounts] = useState<any[]>([]);
  const [breachedAccounts, setBreachedAccounts] = useState<any[]>([]);
  const [currentAccounts, setCurrentAccounts] = useState<any[]>([]);
  const router = useRouter();

  const fetchData = async (token: string) => {
    try {
      const response = await fetch(
        "https://evaluation.fundednext.com/api/get-accounts",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const result = await response.json();

      setActiveAccounts(result?.data?.active);
      setBreachedAccounts(result?.data?.breached);
      setInActiveAccounts(result?.data?.inactive);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    let retrievedToken = getToken();
    if (retrievedToken) {
      fetchData(retrievedToken);
    }
  }, []);

  useEffect(() => {
    activeTab == "active" && setCurrentAccounts(activeAccounts);
    activeTab == "inactive" && setCurrentAccounts(inActiveAccounts);
    activeTab == "breached" && setCurrentAccounts(breachedAccounts);
  }, [activeTab]);

  return (
    <>
      <HeroTab activeTab={activeTab} setActiveTab={setActiveTab} />
      <Account activeTab={activeTab} accounts={currentAccounts} />
    </>
  );
};

export default DashboardPage;
