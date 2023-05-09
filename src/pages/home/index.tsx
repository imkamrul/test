import { ActiveAccount, HeroTab, NoAccount } from "@/core/components/HomePage";
import { Layout } from "antd";
const DashboardPage = () => {
  return (
    <>
      <HeroTab />
      {/* <ActiveAccount /> */}
      <NoAccount />
    </>
  );
};

export default DashboardPage;
