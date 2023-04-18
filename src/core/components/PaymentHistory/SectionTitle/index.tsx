import { Col, Row } from "antd";
import Link from "next/link";
import Styles from "./SectionTitle.module.scss";
const SectionTitle = () => {
  return (
    <>
      <Row
        className={Styles?.titleContainer}
        align="middle"
        justify="space-around"
      >
        <Col span={12}>
          <p>Payment History</p>
        </Col>
        <Col span={12}>
          <Link href="/">Top-up & Reset History</Link>
        </Col>
      </Row>
    </>
  );
};

export default SectionTitle;
