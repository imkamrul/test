import { Col, Row } from "antd";
import { MyPlanHero } from "../MyPlanHero";
import { PricingContainer } from "../PricingContainer";
import Styles from "./MyPlanWrapper.module.scss";
const MyPlanWrapper = () => {
  return (
    <>
      <Row className={Styles.myPlanContainer}>
        <Col span={24} className={Styles?.title}>
          Plans & Pricing
        </Col>
        <Col span={24}>
          <MyPlanHero />
        </Col>
        <Col span={24}>
          <PricingContainer />
        </Col>
      </Row>
    </>
  );
};

export default MyPlanWrapper;
