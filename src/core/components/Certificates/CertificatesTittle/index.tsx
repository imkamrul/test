import { Col } from "antd";
import Style from "./CertificateTittle.module.scss";
export const CertificateTitle = () => {
  return (
    <Col span={24}>
      <div className={Style?.title_section}>
        <img
          src="https://res.cloudinary.com/dvzadhnmh/image/upload/v1683257617/fundednext-dashboard-v2/certificate_batch.svg"
          alt=""
        />{" "}
        <h4>Certificate</h4>
      </div>
      <p className={Style?.info_text}>
        Unlock certificates as you clear each step towards your ultimate goal of
        being funded and consistently generating profits
      </p>
    </Col>
  );
};
