/* eslint-disable react-hooks/exhaustive-deps */
import { AppDispatch } from "@/core/store";
import {
  PlanState,
  fetchMyPlan,
  setModel,
} from "@/core/store/slices/myPlan.slice";
import { Col, Row } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Styles from "./MyPlanHero.module.scss";
export const MyPlanHero = () => {
  const dispatch = useDispatch<AppDispatch>();
  const btnList = [
    { name: "Evaluation", description: "evaluation fund" },
    { name: "Express", description: "express fund" },
  ];
  const { model, allPlan } = useSelector(
    (state: { plan: PlanState }) => state.plan
  );

  useEffect(() => {
    !allPlan && dispatch(fetchMyPlan());
  }, [model]);

  return (
    <Row className={Styles?.sectionBg}>
      <Col span={24}>
        <h4>Your are currently registered under Free subscription plan.</h4>
      </Col>
      <Col span={5} className={Styles?.btnContainer}>
        {btnList?.map((item, idx) => {
          return (
            <button
              onClick={() => dispatch(setModel(item?.description))}
              key={idx}
              className={
                model?.toLowerCase().includes(item?.name?.toLowerCase())
                  ? Styles?.activeBtn
                  : ""
              }
            >
              {item?.name}
            </button>
          );
        })}
      </Col>
    </Row>
  );
};
