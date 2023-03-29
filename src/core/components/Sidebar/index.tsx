/* eslint-disable @next/next/no-img-element */
import { useAppSelector } from "@/hooks/redux.hooks";
import { useMediaQuery } from "@/hooks/responsive.hooks";
import { Affix, Layout, Menu } from "antd";
import { useRouter } from "next/router";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { PropTypes } from "./Sidebar.types";
const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = (props: PropTypes) => {
  const router = useRouter();
  const { isDrawerOpen } = useAppSelector((state) => state.common);
  const isLg: boolean = useMediaQuery("(min-width:992px)");

  const defaultKeys = {
    selected: [
      router.pathname === "/" ? "home" : router.pathname.replace("/", ""),
    ],
    open: ["home"],
  };

  return <Affix>{isLg ? <DesktopMenu /> : <MobileMenu />}</Affix>;
};

export default Sidebar;
