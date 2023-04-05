import { Col, Layout, Row } from "antd";
import MyPlanHero from "../core/components/MyPlan/MyPlanHero";
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
          </Col>
        </Row>
      </Layout.Content>
    </>
  );
};

export default billing;
