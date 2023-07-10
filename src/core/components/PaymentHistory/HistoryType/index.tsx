import { Col, Row } from "antd";
import Styles from "./HistoryType.module.scss";

interface HistoryTypeProps {
  currentStep: string;
  setCurrentStep: (currentStep: string) => void;
}

const HistoryType = ({ currentStep, setCurrentStep }: HistoryTypeProps) => {
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
