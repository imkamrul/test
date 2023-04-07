import { Col, Row } from "antd";
import Category from "../Category";
import { MyPlanHero } from "../MyPlanHero";
import PlanInformation from "../PlanInformation";
import Platform from "../PlatForm";
import { PricingCard } from "../PricingCard";
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

        <Row gutter={100} align={"middle"} className={Styles?.pricingContainer}>
          <Col span={12}>
            {" "}
            <Category />
          </Col>
          <Col span={12}>
            <Platform />
          </Col>
          <Col span={11}>
            <PricingCard />
          </Col>
          <Col span={13}>
            <PlanInformation />
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default MyPlanWrapper;
