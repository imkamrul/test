import { BillingSideBar } from "@/core/components/Billing";
import { MyPlanWrapper } from "@/core/components/MyPlan";
import { Col, Layout, Row } from "antd";
const billing = () => {
  return (
    <>
      <Layout.Content
        className="site-layout-background"
        style={{
          padding: 24,
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

export default billing;
