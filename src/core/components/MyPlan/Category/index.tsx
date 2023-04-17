import { PlanState, setCategory } from "@/core/store/slices/myPlan.slice";
import { Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Styles from "./Category.module.scss";
export const Category = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state: { plan: PlanState }) => state.plan);
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
            category === "consistency" && Styles.activeBtn
          }`}
          onClick={() => dispatch(setCategory("consistency"))}
        >
          Consistency
        </button>
        <button
          className={`${Styles.btnStyle} ${
            category === "non-consistency" && Styles.activeBtn
          }`}
          onClick={() => dispatch(setCategory("non-consistency"))}
        >
          Non Consistency
        </button>
      </Col>
    </Row>
  );
};
