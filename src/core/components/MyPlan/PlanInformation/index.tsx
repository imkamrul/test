import { PlanState } from "@/core/store/slices/myPlan.slice";
import { Col, Row } from "antd";
import { useSelector } from "react-redux";
import BlueMark from "../../icons/Blue.mark.icon";
import Styles from "./PlanInformation.module.scss";
const PlanInformation = () => {
  const { currentPlan } = useSelector(
    (state: { plan: PlanState }) => state.plan
  );
  return (
    <Row className={Styles?.container}>
      {currentPlan?.rules?.map((item, idx) => {
        return (
          <Col span={24} key={idx} className={Styles?.label}>
            <BlueMark />

            <p>{item?.label}</p>
          </Col>
        );
      })}
      <Col span={24}>
        <p className={Styles?.pricing}>Your total Pricing</p>
        <p className={Styles?.total_price}>${currentPlan?.total_price}</p>
      </Col>
    </Row>
  );
};

export default PlanInformation;
