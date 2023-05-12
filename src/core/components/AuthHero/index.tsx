import React from "react";
import Styles from "./AuthHero.module.scss";
import { Col, Row } from "antd";

const AuthHero: React.FC = () => {
  return (
    <Row className={Styles.authHero}>
      <Col span={12}></Col>
      <Col span={10} offset={2}>
        <h3>
          Hurry Up!!! and get funded <br /> by fundednext
        </h3>
      </Col>
    </Row>
  );
};

export default AuthHero;
