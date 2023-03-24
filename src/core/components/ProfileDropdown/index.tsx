import { siteTheme } from "@/utils/siteTheme";
import {
  CaretDownOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, MenuProps } from "antd";
import Styles from "./profileDropdown.module.scss";

const ProfileDropdown = () => {
  const items: MenuProps["items"] = [
    {
      className: Styles.menuItem,
      key: "1",
      label: <span>jhakanjaka@gmail.com</span>,
    },
    {
      className: Styles.menuLink,
      key: "2",
      label: <a href="https://www.aliyun.com">My Profile</a>,
      icon: <ProfileOutlined />,
    },
    {
      className: Styles.menuLink,
      key: "3",
      label: <a href="https://www.aliyun.com">Logout</a>,
      icon: <LogoutOutlined />,
    },
  ];
  return (
    <>
      <Dropdown menu={{ items }}>
        <div
          className={`d-flex align-items-center ${Styles.profileDropDownWrapper}`}
        >
          <div className={Styles.avatarWrapper}>
            <Avatar
              style={{
                backgroundColor: siteTheme.colorPrimary,
                verticalAlign: "middle",
              }}
              size="large"
              gap={1}
            >
              {"U"}
            </Avatar>
          </div>
          Hello world <CaretDownOutlined />
        </div>
      </Dropdown>
    </>
  );
};

export default ProfileDropdown;
