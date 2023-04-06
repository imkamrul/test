import { Col, Row } from "antd";
import PlanInformation from "../PlanInformation/PlanInformation";
import Platform from "../Plantform";
import { PricingCard } from "../PricingCard";

export const PricingContainer = () => {
  return (
    <>
      <Platform />
      <Row gutter={100}>
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
