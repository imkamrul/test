import {
  OrderInformationForm,
  OrderSummary,
  OutsidePayment,
  USPList,
} from "@/core/components/Subscribe";
import { Col, Row } from "antd";
import { useRouter } from "next/router";

interface SubscribeProps {}

const Subscribe = (props: SubscribeProps) => {
  const router = useRouter();
  const { planId } = router.query;

  return (
    <>
      <section className="payment_information_section">
        <div className="container">
          <Row
            gutter={{
              lg: 24,
            }}
          >
            <Col lg={12}>
              <OrderSummary />
              <OrderInformationForm />
            </Col>
            <Col lg={12}>
              <USPList />
              <OutsidePayment />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

Subscribe.layout = "PublicLayout";
export default Subscribe;
