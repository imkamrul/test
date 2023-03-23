import { BookOutlined, DashboardOutlined } from "@ant-design/icons";

export const MenuList = [
  {
    key: "dashboard",
    title: "Dashboard",
    icon: <DashboardOutlined />,
    ref: "/dashboard",
  },
  {
    key: "test",
    title: "test",
    icon: <DashboardOutlined />,
    ref: "/test",
  },
  {
    key: "m1",
    title: "m1",
    icon: <BookOutlined />,
    submenu: [
      {
        key: "sm1",
        ref: "/sm1",
        title: "sm1",
      },
      {
        key: "sm2",
        ref: "/sm2",
        title: "sm2",
      },
    ],
  },
];
