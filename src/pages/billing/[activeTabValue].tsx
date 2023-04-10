import { BillingSideBar } from "@/core/components/Billing";
import { MyPlanWrapper } from "@/core/components/MyPlan";
import CardIcon from "@/core/components/icons/Card.icon";
import { Col, Layout, Row } from "antd";
import { useRouter } from "next/router";

const ActiveTabValue = () => {
  const router = useRouter();
  console.log("router :", router?.query);

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
            <MyPlanWrapper />
          </Col>
        </Row>
      </Layout.Content>
    </>
  );
};
ActiveTabValue.layoutSettings = {
  pageHeader: {
    title: "Billing-Payment Method",
    icon: <CardIcon />,
  },
  contentWrapperStyle: {},
};
export default ActiveTabValue;
