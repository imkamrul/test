/* eslint-disable @next/next/no-img-element */
import { BellOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Layout, Menu, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLocalStorage } from "../../../hooks/localstorage.hooks";
import Styles from "./Topbar.module.scss";
import { PropTypes } from "./Topbar.types";
const { Header } = Layout;
// import { logout } from '../../../apis/authContainer'

const Topbar = (props: PropTypes) => {
  const router = useRouter();
  const [profile] = useLocalStorage("profile", null);
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
  return (
    <>
      <Header className={"header " + Styles.topbar}>
        <div className="logo">
          <Link href="/" passHref={true}>
            <img src="/logo.png" alt="" />
          </Link>
        </div>
        <div className="nav-top-right">
          <div className="nav-item">
            <QuestionCircleOutlined />
          </div>
          <div className="nav-item">
            <BellOutlined />
          </div>
        </div>
      </Header>
    </>
  );
};

export default Topbar;
