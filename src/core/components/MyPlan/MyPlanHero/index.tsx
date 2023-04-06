import { Col, Row } from "antd";
import { useState } from "react";
import Styles from "./MyPlanHero.module.scss";
export const MyPlanHero = () => {
  const btnList = ["Evaluation", "Express"];
  const test = "Evaluation";
  const [currentModel, setCurrentModel] = useState(btnList[0]);
  return (
    <Row className="">
      <Col span={24} className={Styles?.sectionTitle}>
        <p> Plans & Pricing</p>
      </Col>
      <Col span={24} className={Styles?.sectionBg}>
        <Row>
          <Col span={24}>
            <h4>Your are currently registered under Free subscription plan.</h4>
          </Col>
          <Col span={5} className={Styles?.btnContainer}>
            {btnList?.map((item, idx) => {
              return (
                <button
                  onClick={() => setCurrentModel(item)}
                  key={idx}
                  className={currentModel === item ? Styles?.activeBtn : ""}
                >
                  {item}
                </button>
              );
            })}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
