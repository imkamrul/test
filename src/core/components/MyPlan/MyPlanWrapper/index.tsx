import { Col, Row } from "antd";

import { PlanState } from "@/core/store/slices/myPlan.slice";
import { useSelector } from "react-redux";
import { Category } from "../Category";
import { MyPlanHero } from "../MyPlanHero";
import PlanInformation from "../PlanInformation";
import Platform from "../PlatForm";
import { PricingCard } from "../PricingCard";
import Styles from "./MyPlanWrapper.module.scss";
export const MyPlanWrapper = () => {
  const { model } = useSelector((state: { plan: PlanState }) => state.plan);
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
            {model?.toLowerCase().includes("express") ? <Category /> : ""}
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
