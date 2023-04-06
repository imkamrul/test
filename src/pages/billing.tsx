import MyPlanWrapper from "@/core/components/MyPlan/MyPlanWrapper";
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
            <MyPlanWrapper />
          </Col>
        </Row>
      </Layout.Content>
    </>
  );
};

export default billing;
