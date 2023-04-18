import {
  PlanState,
  setCurrentPlan,
  setSelectedModelPlan,
} from "@/core/store/slices/myPlan.slice";
import { Col, Row } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WhiteCircle from "../../icons/White.circle.icon";
import WhiteMark from "../../icons/White.mark.icon";
import Styles from "./PricingCard.module.scss";
export const PricingCard = () => {
  // const [currentPlan, setCurrentPlan] = useState<SinglePlanType | null>(null);

  const handleButtonClick = () => {
    console.log("button click");
  };
  const dispatch = useDispatch();
  const { model, allPlan, selectedModelPlan, currentPlan } = useSelector(
    (state: { plan: PlanState }) => state.plan
  );

  const handleFilterModel = () => {
    const result = allPlan?.filter((item: any) => {
      return item?.description.toLowerCase() == model.toLowerCase();
    });

    if (result?.length) {
      dispatch(setSelectedModelPlan(result));
      dispatch(setCurrentPlan(result[0]));
    }
  };
  useEffect(() => {
    handleFilterModel();
  }, [model, allPlan]);
  return (
    <>
      <Row className={Styles?.cardContainer}>
        {selectedModelPlan?.map((item: any, idx) => {
          const { description, investment_limit, price, id } = item;
          return (
            <Col
              key={idx}
              span={24}
              className={`${Styles?.singleCard}  ${
                currentPlan?.id === id ? Styles?.activeCard : ""
              }`}
              onClick={() => dispatch(setCurrentPlan(item))}
            >
              <Row>
                <Col span={4} className={Styles.icon}>
                  {currentPlan?.id === id ? <WhiteMark /> : <WhiteCircle />}
                </Col>
                <Col span={12}>
                  <p className={Styles.description}>{description}</p>
                  <p className={Styles.price}> One Time Fee ${price}</p>
                </Col>
                <Col span={8}>
                  <p className={Styles.investment_limit}>${investment_limit}</p>
                </Col>
              </Row>
            </Col>
          );
        })}
        <Col span={24}>
          <button
            className={Styles?.buttonStyle}
            onClick={() => handleButtonClick()}
          >
            Buy Now
          </button>
        </Col>
      </Row>
    </>
  );
};
