import { Col, Row } from "antd";
import { pick } from "lodash";
import Styles from "./OutsidePayment.module.scss";
import SingleMethod from "./SingleMethod";
import { paymentMethods } from "./utils";
interface OutsidePaymentProps {}

export const OutsidePayment = (props: OutsidePaymentProps) => {
  const paymentMethodsView = paymentMethods.map((item, idx) => {
    let contentObject = pick(item, ["icon", "name", "method"]);
    return (
      <Col lg={8} key={idx}>
        <SingleMethod contents={contentObject} />
      </Col>
    );
  });

  return (
    <>
      <div className={Styles.OutsidePaymentWrapper}>
        <h3>Need other payment method?</h3>
        <p>Select your preferred payment option below</p>
        <Row gutter={[30, 30]} className="mt-4">
          {paymentMethodsView}
        </Row>
      </div>
    </>
  );
};
