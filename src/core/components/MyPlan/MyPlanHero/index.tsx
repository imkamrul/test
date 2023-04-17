import { PlanState, setModel } from "@/core/store/slices/myPlan.slice";
import { Col, Row } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Styles from "./MyPlanHero.module.scss";
export const MyPlanHero = () => {
  const dispatch = useDispatch();
  const btnList = ["Evaluation", "Express"];
  const { model } = useSelector((state: { plan: PlanState }) => state.plan);

  useEffect(() => {
    // dispatch(fetchMyPlan());
  }, []);
  return (
    <Row className={Styles?.sectionBg}>
      <Col span={24}>
        <h4>Your are currently registered under Free subscription plan.</h4>
      </Col>
      <Col span={5} className={Styles?.btnContainer}>
        {btnList?.map((item, idx) => {
          return (
            <button
              onClick={() => dispatch(setModel(item))}
              key={idx}
              className={model === item ? Styles?.activeBtn : ""}
            >
              {item}
            </button>
          );
        })}
      </Col>
    </Row>
  );
};
