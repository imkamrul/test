import { PlanState, setModel } from "@/core/store/slices/myPlan.slice";
import { Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Styles from "./Category.module.scss";
export const Category = () => {
  const dispatch = useDispatch();
  const { model } = useSelector((state: { plan: PlanState }) => state.plan);
  const serverLists = [
    {
      id: 4,
      name: "Consistency",
      platform: "express fund",
    },
    {
      id: 5,
      name: "Non Consistency",
      platform: "express nca fund",
    },
  ];
  return (
    <Row className={Styles?.container}>
      <Col span={24}>
        <p>Select you category</p>
      </Col>
      <Col span={24}>
        <Row gutter={20}>
          {serverLists.map((item, idx) => {
            return (
              <Col
                span={12}
                key={idx}
                className={` ${Styles?.singlePlatform}  `}
              >
                <label
                  htmlFor={item.name + item.id}
                  className={`  ${
                    model === item?.platform && Styles?.activePlatform
                  } `}
                >
                  <input
                    type="radio"
                    id={item.name + item.id}
                    value={item.id}
                    name="server"
                    className={Styles?.radio}
                    onChange={() => dispatch(setModel(item.platform))}
                  />
                  <p>{item?.name}</p>
                </label>
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
  // return (
  //   <Row>
  //     <Col span={24}>
  //       <p className={Styles?.title}>Select you category</p>
  //       <p className={Styles?.info}>
  //         we will show you appropriate plan based on selection
  //       </p>
  //     </Col>
  //     <Col>
  //       <button
  //         className={`${Styles.btnStyle} ${
  //           model === "express fund" && Styles.activeBtn
  //         }`}
  //         onClick={() => dispatch(setModel("express fund"))}
  //       >
  //         Consistency
  //       </button>
  //       <button
  //         className={`${Styles.btnStyle} ${
  //           model === "express nca fund" && Styles.activeBtn
  //         }`}
  //         onClick={() => dispatch(setModel("express nca fund"))}
  //       >
  //         Non Consistency
  //       </button>
  //     </Col>
  //   </Row>
  // );
};
