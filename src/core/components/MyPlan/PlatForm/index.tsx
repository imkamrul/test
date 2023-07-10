import { PlanState, setPlatForm } from "@/core/store/slices/myPlan.slice";
import { Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Styles from "./Platform.module.scss";
const Platform = () => {
  const dispatch = useDispatch();
  const { platform } = useSelector((state: { plan: PlanState }) => state.plan);
  const serverLists = [
    {
      id: 4,
      name: "Meta Trader",
      serverName: "mt4",
      logo: "https://fundednext.fra1.cdn.digitaloceanspaces.com/dashboard/mt4-logo.svg",
    },
    {
      id: 5,
      name: "Meta Trader",
      serverName: "mt5",
      logo: "https://fundednext.fra1.cdn.digitaloceanspaces.com/dashboard/mt5-logo.svg",
    },
  ];
  return (
    <Row className={Styles?.container}>
      <Col span={24}>
        <p>Select you Platform</p>
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
                  className={` d-flex align-items-center  ${
                    platform === item?.serverName && Styles?.activePlatform
                  }`}
                >
                  <input
                    type="radio"
                    id={item.name + item.id}
                    value={item.id}
                    name="server"
                    className={Styles?.radio}
                    onChange={() => dispatch(setPlatForm(item.serverName))}
                  />
                  <img src={item?.logo} alt="" />
                </label>
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};

export default Platform;
