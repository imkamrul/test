import CustomImage from "@/core/Molicules/CustomImage";
import { PlanState, setPlatForm } from "@/core/store/slices/myPlan.slice";
import { Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import BlueCheck from "../../icons/Blue.check.icon";
import WhiteCheck from "../../icons/White.check.icon";
import Styles from "./Platform.module.scss";
const Platform = () => {
  const dispatch = useDispatch();
  const { platform } = useSelector((state: { plan: PlanState }) => state.plan);

  return (
    <Row className={Styles?.container}>
      <Col span={24}>
        <p>Select you Platform</p>
        <div className={Styles?.btnContainer}>
          <button
            onClick={() => dispatch(setPlatForm("metaTrader-4"))}
            className={`${Styles?.btn} ${
              platform === "metaTrader-4" && Styles?.activeBtn
            }`}
          >
            {platform === "metaTrader-4" ? <BlueCheck /> : <WhiteCheck />}

            <CustomImage
              imageName="metatrader-4"
              customClass={Styles?.customImageStyle}
            />
          </button>
          <button
            onClick={() => dispatch(setPlatForm("metaTrader-5"))}
            className={`${Styles?.btn} ${
              platform === "metaTrader-5" && Styles?.activeBtn
            }`}
          >
            {platform === "metaTrader-5" ? <BlueCheck /> : <WhiteCheck />}
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
