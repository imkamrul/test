import { Col, Row } from "antd";
import Link from "next/link";
import Styles from "./BillingSideBar.module.scss";

export const BillingSideBar = () => {
  const navList = [
    { pageName: "My Plan", path: "/my-plan" },
    { pageName: "Payment Method", path: "/my-plan" },
    { pageName: "Payment History", path: "/my-plan" },
  ];
  return (
    <Row className={Styles.container}>
      <Col span={24}>
        <p className={Styles?.title}>Billing</p>
      </Col>
      {navList?.map((item, idx) => {
        return (
          <Col key={idx} span={24}>
            <Link href={item?.path}>{item?.pageName}</Link>
          </Col>
        );
      })}
    </Row>
  );
};
