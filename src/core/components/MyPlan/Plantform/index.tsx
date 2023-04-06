import CustomImage from "@/core/Molicules/CustomImage";
import { Col, Row } from "antd";
import BlueCheck from "../../icons/Blue.check.icon";
import WhiteCheck from "../../icons/White.check.icon";
import Styles from "./Platform.module.scss";
const Platform = () => {
  return (
    <Row className={Styles?.container}>
      <Col span={24}>
        <p>Select you Platform</p>
        <button>
          <BlueCheck /> <WhiteCheck />
          <CustomImage imageName="metatrader-4.svg" customClass="" />
        </button>
        <button>
          <BlueCheck />
          <WhiteCheck />
          <CustomImage imageName="metatrader-5.svg" customClass="" />
        </button>
      </Col>
    </Row>
  );
};

export default Platform;
