import { Menu } from "antd";

import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Styles from "./Sidebar.module.scss";
import { MenuList } from "./utils";
const { SubMenu } = Menu;
interface MenuItemsProps {}

const MenuItems = (props: MenuItemsProps) => {
  const router = useRouter();
  const defaultKeys = {
    selected: [
      router.pathname === "/" ? "home" : router.pathname.replace("/", ""),
    ],
    open: ["home"],
  };
  return (
    <>
      <Menu
        mode="inline"
        defaultSelectedKeys={defaultKeys.selected}
        theme="dark"
        defaultOpenKeys={defaultKeys.open}
        style={{
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
    </>
  );
};

export default MenuItems;
