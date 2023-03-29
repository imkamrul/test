/* eslint-disable @next/next/no-img-element */
import { setIsDrawerOpen } from "@/core/store/slices/common.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hooks";
import { useMediaQuery } from "@/hooks/responsive.hooks";
import { Drawer } from "antd";
import Link from "next/link";
import ProfileMobile from "../ProfileMobile";
import MenuItems from "./MenuItems";
import Styles from "./Sidebar.module.scss";

const MobileMenu = () => {
  const { isDrawerOpen } = useAppSelector((state) => state.common);
  const isLg: Boolean = useMediaQuery("(min-width:992px)");
  const dispatch = useAppDispatch();

  const handleDrawerToggle = () => {
    dispatch(setIsDrawerOpen(!isDrawerOpen));
  };

  return (
    <>
      <Drawer
        placement="left"
        onClose={handleDrawerToggle}
        open={!isDrawerOpen}
        closable={false}
        width={280}
        size="default"
        className={Styles.mobileMenuWrapper}
      >
        <div className={Styles.logo}>
          <Link href="/" passHref={true}>
            <img
              src="https://res.cloudinary.com/dvzadhnmh/image/upload/v1679487567/fundednext-dashboard-v2/logo-icon-white.svg"
              alt=""
            />

            <img
              src="https://res.cloudinary.com/dvzadhnmh/image/upload/v1679487068/fundednext-dashboard-v2/logo-white-text.svg"
              alt=""
            />
          </Link>
        </div>

        {/* user profile */}
        <ProfileMobile />
        {/* user profile */}

        <MenuItems />

        {/* sidebar footer */}
        <div className={Styles.sidebarBottom}>
          <Link href={"/"} className={Styles.getFundedBtn}>
            Get Funded Now
          </Link>
        </div>
        {/* sidebar footer */}
      </Drawer>
    </>
  );
};

export default MobileMenu;
