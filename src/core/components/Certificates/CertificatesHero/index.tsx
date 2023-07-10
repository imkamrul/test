import { Col } from "antd";
import Style from "./CertificatesHero.module.scss";
export const CertificatesHero = () => {
  return (
    <Col span={24} className={Style?.container}>
      <img
        src="https://res.cloudinary.com/dvzadhnmh/image/upload/q_auto/f_auto/v1683173056/fundednext-dashboard-v2/batch"
        alt=""
      />
      <h6>Welcome to FundedNext Certificate</h6>
      <p>
        Show everyone your trading skills by unlocking certificates as the proof
        of your mastery over charts.{" "}
      </p>
    </Col>
  );
};
