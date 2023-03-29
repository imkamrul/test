/* eslint-disable @next/next/no-img-element */
import { useAppSelector } from "@/hooks/redux.hooks";
import { Layout } from "antd";
import Link from "next/link";
import MenuItems from "./MenuItems";
import Styles from "./Sidebar.module.scss";
const { Sider } = Layout;
interface DesktopMenuProps {}

const DesktopMenu = (props: DesktopMenuProps) => {
  const { isDrawerOpen } = useAppSelector((state) => state.common);
  return (
    <>
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

            <MenuItems />
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
    </>
  );
};

export default DesktopMenu;
