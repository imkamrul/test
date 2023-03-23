/* eslint-disable @next/next/no-img-element */
import { useAppSelector } from "@/hooks/redux.hooks";
import { Affix, Layout, Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Styles from "./Sidebar.module.scss";
import { PropTypes } from "./Sidebar.types";
import { MenuList } from "./utils";
const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = (props: PropTypes) => {
  const router = useRouter();

  const { isDrawerOpen } = useAppSelector((state) => state.common);

  const defaultKeys = {
    selected: [
      router.pathname === "/" ? "home" : router.pathname.replace("/", ""),
    ],
    open: ["home"],
  };

  return (
    <Affix>
      <Sider collapsed={!isDrawerOpen}>
        <div className={Styles.sidebar}>
          <div>
            <div className={Styles.logo}>
              <Link href="/" passHref={true}>
                <img
                  src="https://res.cloudinary.com/dvzadhnmh/image/upload/v1679487567/fundednext-dashboard-v2/logo-icon-white.svg"
                  alt=""
                />
                {isDrawerOpen && (
                  <img
                    src="https://res.cloudinary.com/dvzadhnmh/image/upload/v1679487068/fundednext-dashboard-v2/logo-white-text.svg"
                    alt=""
                  />
                )}
              </Link>
            </div>
            <Menu
              mode="inline"
              defaultSelectedKeys={defaultKeys.selected}
              theme="dark"
              defaultOpenKeys={defaultKeys.open}
              style={{
                height: "calc(100vh - 500px)",
                borderRight: 0,
                overflowX: "hidden",
                overflowY: "scroll",
              }}
              className={`scrollbar-hidden ${Styles.sidebarMenu}`}
            >
              {MenuList.map((item) => (
                <Fragment key={item.key}>
                  {item.submenu ? (
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                      {item?.submenu?.map((sub) => (
                        <Menu.Item key={sub.key}>
                          <Link href={sub.ref}>{sub.title}</Link>
                        </Menu.Item>
                      ))}
                    </SubMenu>
                  ) : (
                    <Menu.Item key={item.key} icon={item.icon}>
                      <Link href={item.ref}>{item.title}</Link>
                    </Menu.Item>
                  )}
                </Fragment>
              ))}
            </Menu>
          </div>

          <div
            className={`${Styles.sidebarBottom} ${
              isDrawerOpen && Styles.sidebarBottomActive
            }`}
          >
            <img
              src="https://res.cloudinary.com/dvzadhnmh/image/upload/v1679564831/fundednext-dashboard-v2/sidebar-img.svg"
              alt="sidebar-img"
            />
            <p>Start New Account</p>
            <Link href={"/"}>Get Funded Now</Link>
          </div>
        </div>
      </Sider>
    </Affix>
  );
};

export default Sidebar;
