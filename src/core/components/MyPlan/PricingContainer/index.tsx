import { Col, Row } from "antd";
import PlanInformation from "../PlanInformation/PlanInformation";
import Platform from "../PlatForm";
import { PricingCard } from "../PricingCard";
import Styles from "./PricingContainer.module.scss";
export const PricingContainer = () => {
  return (
    <>
      <Row gutter={100} className={Styles.pricingWrapper}>
        <Col span={24}>
          <Platform />
        </Col>
        <Col span={11}>
          <PricingCard />
        </Col>
        <Col span={13}>
          <PlanInformation />
        </Col>
      </Row>
    </>
  );
};
