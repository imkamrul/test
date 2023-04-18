import { Col, Row } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import Styles from "./BillingSideBar.module.scss";

export const BillingSideBar = () => {
  const navList = [
    { pageName: "My Plan", path: "my-plan" },
    // { pageName: "Payment Method", path: "payment-method" },
    { pageName: "Payment History", path: "payment-history" },
  ];
  const router = useRouter();
  const { activeTabValue } = router?.query;
  console.log("activeTabValue :", activeTabValue);
  return (
    <Row className={Styles.container}>
      <Col span={24}>
        <p className={Styles?.title}>Billing</p>
      </Col>
      {navList?.map((item, idx) => {
        return (
          <Col
            key={idx}
            span={24}
            className={`${activeTabValue === item?.path && Styles?.activeMenu}`}
          >
            <Link href={item?.path}>{item?.pageName}</Link>
          </Col>
        );
      })}
    </Row>
  );
};
