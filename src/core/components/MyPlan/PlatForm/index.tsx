import CustomImage from "@/core/Molicules/CustomImage";
import { Col, Row } from "antd";
import { useState } from "react";
import BlueCheck from "../../icons/Blue.check.icon";
import WhiteCheck from "../../icons/White.check.icon";
import Styles from "./Platform.module.scss";
const Platform = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const handlePlatformClick = (item: string) => {
    setSelectedPlatform(item);
  };
  return (
    <Row className={Styles?.container}>
      <Col span={24}>
        <p>Select you Platform</p>
        <div className={Styles?.btnContainer}>
          <button
            onClick={() => handlePlatformClick("metaTrader-4")}
            className={`${Styles?.btn} ${
              selectedPlatform === "metaTrader-4" && Styles?.activeBtn
            }`}
          >
            {selectedPlatform === "metaTrader-4" ? (
              <BlueCheck />
            ) : (
              <WhiteCheck />
            )}

            <CustomImage
              imageName="metatrader-4"
              customClass={Styles?.customImageStyle}
            />
          </button>
          <button
            onClick={() => handlePlatformClick("metaTrader-5")}
            className={`${Styles?.btn} ${
              selectedPlatform === "metaTrader-5" && Styles?.activeBtn
            }`}
          >
            {selectedPlatform === "metaTrader-5" ? (
              <BlueCheck />
            ) : (
              <WhiteCheck />
            )}
            <CustomImage
              imageName="metatrader-5"
              customClass={Styles?.customImageStyle}
            />
          </button>
        </div>
      </Col>
    </Row>
  );
};

export default Platform;
