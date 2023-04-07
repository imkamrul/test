import { Col, Row } from "antd";
import { useState } from "react";
import Styles from "./Category.module.scss";
export const Category = () => {
  const [currentCategory, setCurrentCategory] = useState("");
  return (
    <Row>
      <Col span={24}>
        <p className={Styles?.title}>Select you category</p>
        <p className={Styles?.info}>
          we will show you appropriate plan based on selection
        </p>
      </Col>
      <Col>
        <button
          className={`${Styles.btnStyle} ${
            currentCategory === "consistency" && Styles.activeBtn
          }`}
          onClick={() => setCurrentCategory("consistency")}
        >
          Consistency
        </button>
        <button
          className={`${Styles.btnStyle} ${
            currentCategory === "non-consistency" && Styles.activeBtn
          }`}
          onClick={() => setCurrentCategory("non-consistency")}
        >
          Non Consistency
        </button>
      </Col>
    </Row>
  );
};
