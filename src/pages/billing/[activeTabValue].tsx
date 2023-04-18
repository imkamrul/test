import { BillingSideBar } from "@/core/components/Billing";
import { MyPlanWrapper } from "@/core/components/MyPlan";
import PaymentHistoryWrapper from "@/core/components/PaymentHistory/PaymentHistoryWrapper";
import CardIcon from "@/core/components/icons/Card.icon";
import { Col, Layout, Row } from "antd";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const { activeTabValue } = router?.query;
  console.log("activeTabValue :", activeTabValue);

  return (
    <>
      <Layout.Content
        className="site-layout-background"
        style={{
          padding: "40px 0",
          margin: 0,
          minHeight: "100%",
        }}
      >
        <Row gutter={20}>
          <Col span={4}>
            <BillingSideBar />
          </Col>
          <Col span={18}>
            {activeTabValue === "my-plan" && <MyPlanWrapper />}
            {activeTabValue === "payment-history" && <PaymentHistoryWrapper />}
          </Col>
        </Row>
      </Layout.Content>
    </>
  );
};
Index.layoutSettings = {
  pageHeader: {
    title: "Billing-Payment Method",
    icon: <CardIcon />,
  },
  contentWrapperStyle: {},
};
export default Index;
