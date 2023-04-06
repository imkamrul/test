import { Col, Row } from "antd";
import { useState } from "react";
import WhiteCircle from "../../icons/White.circle.icon";
import WhiteMark from "../../icons/White.mark.icon";
import Styles from "./PricingCard.module.scss";
import { SinglePlanType } from "./PricingCard.type";
export const PricingCard = () => {
  const testData = [
    {
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
    },
    {
      id: 10,
      name: "Evaluation-15000 USD",
      slug: "evaluation-15000-usd",
      type: 1,
      rules: [
        {
          rule: {
            value: null,
            operand: null,
            operator: "two_step_assessment_process",
          },
          label: "Two Step Assessment Process",
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
      topup_charge: 50,
      reset_charge: 89,
      investment_limit: 15000,
      setup_fee: 0,
      total_price: 99,
      description: "EVALUATION FUND",
      payment_gateway: "0",
      payment_gateway_id: "evaluation-15000-usd",
    },
    {
      id: 16,
      name: "Express NCA 15000 USD",
      slug: "express-nca-15000-usd",
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
            operator: "one_time_refundable_fee$119",
          },
          label: "One Time Refundable Fee $119",
        },
      ],
      status: 1,
      interval: "1",
      price: 119,
      discount_price: 0,
      topup_charge: 89,
      reset_charge: 95,
      investment_limit: 15000,
      setup_fee: 0,
      total_price: 119,
      description: "EXPRESS NCA FUND",
      payment_gateway: "0",
      payment_gateway_id: "express-nca-15000-usd",
    },
    {
      id: 11,
      name: "Evaluation-25000 USD",
      slug: "evaluation-25000-usd",
      type: 1,
      rules: [
        {
          rule: {
            value: null,
            operand: null,
            operator: "two_step_assessment_process",
          },
          label: "Two Step Assessment Process",
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
            operator: "one_time_refundable_fee$199",
          },
          label: "One Time Refundable Fee $199",
        },
      ],
      status: 1,
      interval: "1",
      price: 199,
      discount_price: 0,
      topup_charge: 0,
      reset_charge: 179,
      investment_limit: 25000,
      setup_fee: 0,
      total_price: 199,
      description: "EVALUATION FUND",
      payment_gateway: "0",
      payment_gateway_id: "evaluation-25000-usd",
    },
    {
      id: 15,
      name: "Express 25000 USD",
      slug: "express-25000-usd",
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
            operator: "one_time_refundable_fee$199",
          },
          label: "One Time Refundable Fee $199",
        },
      ],
      status: 1,
      interval: "1",
      price: 199,
      discount_price: 0,
      topup_charge: 149,
      reset_charge: 159,
      investment_limit: 25000,
      setup_fee: 0,
      total_price: 199,
      description: "EXPRESS FUND",
      payment_gateway: "0",
      payment_gateway_id: "express-25000-usd",
    },
    {
      id: 17,
      name: "Express NCA 25000 USD",
      slug: "express-nca-25000-usd",
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
            operator: "one_time_refundable_fee$229",
          },
          label: "One Time Refundable Fee $229",
        },
      ],
      status: 1,
      interval: "1",
      price: 229,
      discount_price: 0,
      topup_charge: 172,
      reset_charge: 183,
      investment_limit: 25000,
      setup_fee: 0,
      total_price: 229,
      description: "EXPRESS NCA FUND",
      payment_gateway: "0",
      payment_gateway_id: "express-nca-25000-usd",
    },
    {
      id: 7,
      name: "Express 50000 USD",
      slug: "express-50000-usd",
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
            operator: "one_time_refundable_fee$299",
          },
          label: "One Time Refundable Fee $299",
        },
      ],
      status: 1,
      interval: "1",
      price: 299,
      discount_price: 0,
      topup_charge: 224,
      reset_charge: 239,
      investment_limit: 50000,
      setup_fee: 0,
      total_price: 299,
      description: "EXPRESS FUND",
      payment_gateway: "0",
      payment_gateway_id: "express-50000-usd",
    },
    {
      id: 12,
      name: "Evaluation 50000 USD",
      slug: "evaluation-50000-usd",
      type: 1,
      rules: [
        {
          rule: {
            value: null,
            operand: null,
            operator: "two_step_assessment_process",
          },
          label: "Two Step Assessment Process",
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
            operator: "one_time_refundable_fee$299",
          },
          label: "One Time Refundable Fee $299",
        },
      ],
      status: 1,
      interval: "1",
      price: 299,
      discount_price: 0,
      topup_charge: 250,
      reset_charge: 269,
      investment_limit: 50000,
      setup_fee: 0,
      total_price: 299,
      description: "EVALUATION FUND",
      payment_gateway: "0",
      payment_gateway_id: "evaluation-50000-usd",
    },
    {
      id: 18,
      name: "Express NCA 50000 USD",
      slug: "express-nca-50000-usd",
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
            operator: "one_time_refundable_fee$379",
          },
          label: "One Time Refundable Fee $379",
        },
      ],
      status: 1,
      interval: "1",
      price: 379,
      discount_price: 0,
      topup_charge: 284,
      reset_charge: 303,
      investment_limit: 50000,
      setup_fee: 0,
      total_price: 379,
      description: "EXPRESS NCA FUND",
      payment_gateway: "0",
      payment_gateway_id: "express-nca-50000-usd",
    },
    {
      id: 5,
      name: "Express 100000 USD",
      slug: "express-100000-usd",
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
            operator: "one_time_refundable_fee$549",
          },
          label: "One Time Refundable Fee $549",
        },
      ],
      status: 1,
      interval: "1",
      price: 549,
      discount_price: 0,
      topup_charge: 412,
      reset_charge: 439,
      investment_limit: 100000,
      setup_fee: 0,
      total_price: 549,
      description: "EXPRESS FUND",
      payment_gateway: "0",
      payment_gateway_id: "express-100000-usd",
    },
    {
      id: 13,
      name: "Evaluation 100000 USD",
      slug: "evaluation-100000-usd",
      type: 1,
      rules: [
        {
          rule: {
            value: null,
            operand: null,
            operator: "two_step_assessment_process",
          },
          label: "Two Step Assessment Process",
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
            operator: "one_time_refundable_fee$549",
          },
          label: "One Time Refundable Fee $549",
        },
      ],
      status: 1,
      interval: "1",
      price: 549,
      discount_price: 0,
      topup_charge: 0,
      reset_charge: 494,
      investment_limit: 100000,
      setup_fee: 0,
      total_price: 549,
      description: "EVALUATION FUND",
      payment_gateway: "0",
      payment_gateway_id: "evaluation-100000-usd",
    },
    {
      id: 19,
      name: "Express NCA 100000 USD",
      slug: "express-nca-100000-usd",
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
            operator: "one_time_refundable_fee$699",
          },
          label: "One Time Refundable Fee $699",
        },
      ],
      status: 1,
      interval: "1",
      price: 699,
      discount_price: 0,
      topup_charge: 524,
      reset_charge: 559,
      investment_limit: 100000,
      setup_fee: 0,
      total_price: 699,
      description: "EXPRESS NCA FUND",
      payment_gateway: "0",
      payment_gateway_id: "express-nca-100000-usd",
    },
    {
      id: 14,
      name: "Evaluation-200000 USD",
      slug: "evaluation-200000-usd",
      type: 1,
      rules: [
        {
          rule: {
            value: null,
            operand: null,
            operator: "two_step_assessment_process",
          },
          label: "Two Step Assessment Process",
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
            operator: "one_time_refundable_fee$999",
          },
          label: "One Time Refundable Fee $999",
        },
      ],
      status: 1,
      interval: "1",
      price: 999,
      discount_price: 0,
      topup_charge: 0,
      reset_charge: 899,
      investment_limit: 200000,
      setup_fee: 0,
      total_price: 999,
      description: "EVALUATION FUND",
      payment_gateway: "0",
      payment_gateway_id: "evaluation-200000-usd",
    },
    {
      id: 20,
      name: "Express 200000 USD",
      slug: "express-200000-usd",
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
            operator: "one_time_refundable_fee$999",
          },
          label: "One Time Refundable Fee $999",
        },
      ],
      status: 1,
      interval: "1",
      price: 999,
      discount_price: 0,
      topup_charge: 749,
      reset_charge: 799,
      investment_limit: 200000,
      setup_fee: 0,
      total_price: 999,
      description: "EXPRESS FUND",
      payment_gateway: "0",
      payment_gateway_id: "express-200000-usd",
    },
  ];
  const currentModel = testData.filter(
    (item) => item.description.toLowerCase() == "evaluation fund"
  );
  const [currentPlan, setCurrentPlan] = useState<SinglePlanType | null>(null);
  const handlePlanSelect = (item: SinglePlanType) => {
    setCurrentPlan(item);
  };
  const handleButtonClick = () => {
    console.log("button click");
  };
  return (
    <>
      <Row className={Styles?.cardContainer}>
        {currentModel?.map((item, idx) => {
          const { description, investment_limit, price, id } = item;
          return (
            <Col
              key={idx}
              span={24}
              className={`${Styles?.singleCard}  ${
                currentPlan?.id === id ? Styles?.activeCard : ""
              }`}
              onClick={() => handlePlanSelect(item)}
            >
              <Row>
                <Col span={4} className={Styles.icon}>
                  {currentPlan?.id === id ? <WhiteMark /> : <WhiteCircle />}
                </Col>
                <Col span={12}>
                  <p className={Styles.description}>{description}</p>
                  <p className={Styles.price}> One Time Fee ${price}</p>
                </Col>
                <Col span={8}>
                  <p className={Styles.investment_limit}>${investment_limit}</p>
                </Col>
              </Row>
            </Col>
          );
        })}
        <Col span={24}>
          <button
            className={Styles?.buttonStyle}
            onClick={() => handleButtonClick()}
          >
            Buy Now
          </button>
        </Col>
      </Row>
    </>
  );
};
