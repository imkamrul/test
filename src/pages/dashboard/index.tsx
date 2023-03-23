import { Layout } from "antd";
const DashboardPage = () => {
  return (
    <Layout.Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: "100%",
      }}
    >
      <p>Welcome to dashboard!</p>
    </Layout.Content>
  );
};

export default DashboardPage;
