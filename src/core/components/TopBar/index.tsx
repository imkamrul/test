/* eslint-disable @next/next/no-img-element */
import { setIsDrawerOpen } from "@/core/store/slices/common.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hooks";
import { LeftOutlined } from "@ant-design/icons";
import { Col, Layout, Menu, message, Row } from "antd";
import { useRouter } from "next/router";
import { useLocalStorage } from "../../../hooks/localstorage.hooks";
import ProfileDropdown from "../ProfileDropdown";
import Styles from "./Topbar.module.scss";
import { PropTypes } from "./Topbar.types";
const { Header } = Layout;
// import { logout } from '../../../apis/authContainer'
const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };
const Topbar = (props: PropTypes) => {
  const router = useRouter();
  const [profile] = useLocalStorage("profile", null);
  const dispatch = useAppDispatch();

  const { isDrawerOpen } = useAppSelector((state) => state.common);

  function loggingOut() {
    // removeLoggedInUser();

    message.warning("Logging out !");
    // logout().then(() => {
    //   router.push('/login')
    // })
  }
  const userDropdown = (
    <Menu>
      <Menu.Item>
        <span onClick={loggingOut}>Logout</span>
      </Menu.Item>
    </Menu>
  );

  const handleDrawerToggle = () => {
    dispatch(setIsDrawerOpen(!isDrawerOpen));
  };

  return (
    <>
      <Header
        className={`header ${isDrawerOpen && "active"} ${Styles.top_bar}`}
      >
        <Row gutter={16} align="middle">
          <Col span={2}>
            <button
              className={Styles.drawer_trigger_desktop}
              onClick={handleDrawerToggle}
            >
              <LeftOutlined />
            </button>
          </Col>
          <Col className="gutter-row d-flex justify-content-end" span={22}>
            <ProfileDropdown />
          </Col>
        </Row>
      </Header>
    </>
  );
};

export default Topbar;
