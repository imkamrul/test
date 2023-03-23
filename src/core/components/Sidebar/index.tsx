/* eslint-disable @next/next/no-img-element */
import { RootStateTypes } from "@/core/store/types/RootStateTypes";
import { Layout, Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import Styles from "./Sidebar.module.scss";
import { PropTypes } from "./Sidebar.types";
import { MenuList } from "./utils";
const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = (props: PropTypes) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const { isDrawerOpen } = useSelector(
    (state: RootStateTypes) => state?.common
  );

  const defaultKeys = {
    selected: [
      router.pathname === "/" ? "dashboard" : router.pathname.replace("/", ""),
    ],
    open: ["dashboard"],
  };

  return (
    <Sider collapsed={!isDrawerOpen}>
      <div className={Styles.sidebar}>
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
            height: "100vh",
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
    </Sider>
  );
};

export default Sidebar;
