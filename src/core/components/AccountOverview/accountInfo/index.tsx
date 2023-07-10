import {
  AccountIcon,
  BalanceIcon,
  CycleIcon,
  PlanIcon,
} from "@/core/Molicules/SVGIcon";
import { CopyOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import Style from "./AccountInfo.module.scss";
export const AccountInfo = () => {
  const dummyData = [
    {
      labelName: "Log In",
      value: "34343434",
    },
    {
      labelName: "Investor Password",
      value: "34343434",
    },
    {
      labelName: "Password",
      value: "34343434",
    },
    {
      labelName: "MT4 Server",
      value: "34343434",
    },
  ];
  return (
    <>
      <div className={Style?.accountInfoContainer}>
        <Row className={Style?.infoWrapper} align="bottom">
          <Col span={7} className={Style?.borderRight}>
            <Row>
              <Col span={6}>
                <img
                  src=" https://res.cloudinary.com/dvzadhnmh/image/upload/v1685441770/fundednext-prod/Ellipse_655.jpg"
                  alt=""
                />
              </Col>
              <Col span={18}>
                <p className={Style?.name}>Hello Ana Nicolas!!</p>
                <p className={Style?.currentModel}>
                  Currently you are in a Evaluation Phase 1
                </p>

                <div className={Style?.balancePlan}>
                  <BalanceIcon />
                  <p>Balance: $15000.00</p>
                </div>
                <div className={Style?.balancePlan}>
                  <PlanIcon />
                  <p>Funded Plan: Evaluation-15K (Demo)</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={12} className={Style?.borderRight + " " + "pl-5 pr-5"}>
            <div className="d-flex pb-2">
              <AccountIcon />
              <p className={Style?.name + " " + "pl-2"}>Account Details</p>
            </div>
            <Row justify="space-between">
              {dummyData.map((item, index) => (
                <Col span={10} key={index} className={Style?.detailsField}>
                  <p className={Style?.labelName}>{item.labelName}</p>
                  <div className="d-flex ">
                    <p className={Style?.value + " " + " pr-2"}>{item.value}</p>
                    <CopyOutlined />
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col span={5} className="pl-5">
            <Col span={24}>
              <div className="d-flex pb-4">
                <CycleIcon />
                <p className={Style?.name + " " + "pl-2"}>
                  Trading Cycle Details
                </p>
              </div>

              <p className={Style.dateStyle}>Start Date: Sept 13,2022</p>
              <p className={Style.dateStyle}>ENd Date: Oct 13,2022</p>
            </Col>
          </Col>
        </Row>
      </div>
    </>
  );
};
