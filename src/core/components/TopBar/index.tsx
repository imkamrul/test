import { BellOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Layout, Menu, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLocalStorage } from "../../../hooks/localState";
import Styles from "./Topbar.module.scss";
import { PropTypes } from "./Topbar.types";
const { Header } = Layout;
// import { logout } from '../../../apis/authContainer'
import { removeLoggedInUser } from "../../utils/UserManager";

const Topbar = (props: PropTypes) => {
  const router = useRouter();
  const [profile] = useLocalStorage("profile", null);
  function loggingOut() {
    removeLoggedInUser();

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
          <Link href="/" passHref>
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
          {profile && (
            <div className="nav-item nav-user">
              <Dropdown overlay={userDropdown}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    gap: 8,
                  }}
                  onClick={(e) => e.preventDefault()}
                >
                  <div className="user-name">{profile.name}</div>
                  <Avatar
                    src={
                      <img
                        src="https://joeschmoe.io/api/v1/random"
                        style={{ width: 32 }}
                      />
                    }
                  />
                </div>
              </Dropdown>
            </div>
          )}
        </div>
      </Header>
    </>
  );
};

export default Topbar;
