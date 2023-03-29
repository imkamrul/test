/* eslint-disable @next/next/no-img-element */
import { setIsDrawerOpen } from "@/core/store/slices/common.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hooks";
import { useMediaQuery } from "@/hooks/responsive.hooks";
import { LeftOutlined } from "@ant-design/icons";
import { Col, Layout, Menu, message, Row } from "antd";
import { useRouter } from "next/router";
import { useLocalStorage } from "../../../hooks/localstorage.hooks";
import Bars from "../icons/Bars.icon";
import ProfileDropdown from "../ProfileDropdown";
import Styles from "./Topbar.module.scss";
import { PropTypes } from "./Topbar.types";
const { Header } = Layout;
// import { logout } from '../../../apis/authContainer'
const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };
const Topbar = (props: PropTypes) => {
  const router = useRouter();
  const [profile] = useLocalStorage("profile", null);
  const isLg: boolean = useMediaQuery("(min-width:992px)");
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
        className={`header ${isDrawerOpen && isLg && "active"} ${
          Styles.top_bar
        }`}
      >
        <Row
          gutter={{
            lg: 16,
          }}
          align="middle"
        >
          <Col xs={18} lg={2}>
            {/* sidebar toggle menu pc  */}
            {isLg && (
              <button
                className={Styles.drawer_trigger_desktop}
                onClick={handleDrawerToggle}
              >
                <LeftOutlined />
              </button>
            )}
            {/* sidebar toggle menu pc  */}
            {!isLg && (
              <div className="d-flex align-items-center">
                <img
                  src="https://res.cloudinary.com/dvzadhnmh/image/upload/v1680067866/fundednext-dashboard-v2/logo-icon-for-white-bg.svg"
                  alt="logo-icon-for-white-bg"
                  style={{
                    width: "30px",
                  }}
                />
                <div className={Styles.pageTitle}>
                  <h2>Accounts Overview</h2>
                </div>
              </div>
            )}
          </Col>

          <Col className="gutter-row d-flex justify-content-end" xs={6} lg={22}>
            {isLg && <ProfileDropdown />}

            {!isLg && (
              <button
                className={Styles.topbarButton}
                onClick={handleDrawerToggle}
              >
                <Bars />
              </button>
            )}
          </Col>
        </Row>
      </Header>
    </>
  );
};

export default Topbar;
