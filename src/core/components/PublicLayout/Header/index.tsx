import { Col, Divider, Row } from "antd";
import Styles from "./Header.module.scss";
interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <>
      <header className={Styles.publicHeader}>
        <div className="container">
          <Row align={"middle"}>
            <Col lg={8}>
              <img
                src="https://res.cloudinary.com/dvzadhnmh/image/upload/v1679483188/fundednext-dashboard-v2/Logo_Main.svg"
                alt="fundednext"
              />
            </Col>
          </Row>
          <Divider
            style={{
              margin: "0",
            }}
          />
        </div>
      </header>
    </>
  );
};
