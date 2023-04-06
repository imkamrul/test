import { Col, Row } from "antd";
import BlueMark from "../../icons/Blue.mark.icon";
import Styles from "./PlanInformation.module.scss";
const PlanInformation = () => {
  const test = {
    id: 8,
    name: "Express 15000 USD",
    slug: "express-15000-usd",
    type: 0,
    rules: [
      {
        rule: {
          value: null,
          operand: null,
          operator: "one_step_assessment_process",
        },
        label: "One Step Assessment Process",
      },
      {
        rule: {
          value: null,
          operand: null,
          operator: "5%_daily_drawdown",
        },
        label: "5% Daily Drawdown",
      },
      {
        rule: {
          value: null,
          operand: null,
          operator: "10%_overall_drawdown",
        },
        label: "10% Overall Drawdown",
      },
      {
        rule: {
          value: null,
          operand: null,
          operator: "10_trading_days",
        },
        label: "10 Trading Days",
      },
      {
        rule: {
          value: null,
          operand: null,
          operator: "one_time_refundable_fee$99",
        },
        label: "One Time Refundable Fee $99",
      },
    ],
    status: 1,
    interval: "1",
    price: 99,
    discount_price: 0,
    topup_charge: 74,
    reset_charge: 79,
    investment_limit: 15000,
    setup_fee: 0,
    total_price: 99,
    description: "EXPRESS FUND",
    payment_gateway: "0",
    payment_gateway_id: "express-15000-usd",
  };
  return (
    <Row className={Styles?.container}>
      {test?.rules?.map((item, idx) => {
        return (
          <Col span={24} key={idx} className={Styles?.label}>
            <BlueMark />

            <p>{item?.label}</p>
          </Col>
        );
      })}
      <Col span={24}>
        <p className={Styles?.pricing}>Your total Pricing</p>
        <p className={Styles?.total_price}>${test?.total_price}</p>
      </Col>
    </Row>
  );
};

export default PlanInformation;
