import { Col, Row } from "antd";
import { useState } from "react";
import Styles from "./HistoryType.module.scss";
const HistoryType = () => {
  const [currentStep, setCurrentStep] = useState("approved");
  return (
    <>
      <Row align="middle" justify="start">
        <Col span={5} className={Styles?.BtnContainer}>
          <button
            className={`${Styles?.CustomButton} ${
              currentStep === "approved" ? Styles?.active : ""
            }`}
            onClick={() => {
              setCurrentStep("approved");
            }}
          >
            Approved
          </button>
          <button
            className={`${Styles?.CustomButton} ${
              currentStep === "pending" ? Styles?.active : ""
            }`}
            onClick={() => {
              setCurrentStep("pending");
            }}
          >
            Pending
          </button>
        </Col>
      </Row>
    </>
  );
};

export default HistoryType;
