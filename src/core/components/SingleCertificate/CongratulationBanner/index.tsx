import { Col, Row } from "antd";
import Style from "./Congratulation.module.scss";
type CongratulationBannerProps = {
  certificateId: string;
  accountId: string;
};
export const CongratulationBanner = ({
  certificateId,
  accountId,
}: CongratulationBannerProps) => {
  return (
    <Row className={Style?.bannerContainer}>
      <Col span={24}>
        <h4>Congratulations on being a Crown Trader of FundedNext</h4>
        <p>Feel free to download and share your certificate</p>
      </Col>
    </Row>
  );
};
