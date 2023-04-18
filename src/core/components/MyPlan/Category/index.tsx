import { PlanState, setModel } from "@/core/store/slices/myPlan.slice";
import { Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Styles from "./Category.module.scss";
export const Category = () => {
  const dispatch = useDispatch();
  const { model } = useSelector((state: { plan: PlanState }) => state.plan);

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
            model === "express fund" && Styles.activeBtn
          }`}
          onClick={() => dispatch(setModel("express fund"))}
        >
          Consistency
        </button>
        <button
          className={`${Styles.btnStyle} ${
            model === "express nca fund" && Styles.activeBtn
          }`}
          onClick={() => dispatch(setModel("express nca fund"))}
        >
          Non Consistency
        </button>
      </Col>
    </Row>
  );
};
