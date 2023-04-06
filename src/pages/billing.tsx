import { MyPlanHero, PricingContainer } from "@/core/components/MyPlan";
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
        <Row>
          <Col span={4}></Col>
          <Col span={18}>
            <MyPlanHero />
            <PricingContainer />
          </Col>
        </Row>
      </Layout.Content>
    </>
  );
};

export default billing;
