import {
  BoxPlotOutlined,
  CalendarOutlined,
  HomeOutlined,
  QuestionCircleOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

export const MenuList = [
  {
    key: "home",
    title: "Home",
    icon: <HomeOutlined />,
    ref: "/home",
  },
  {
    key: "orderList",
    title: "Order List",
    icon: <UnorderedListOutlined />,
    ref: "/order-list",
  },
  {
    key: "utilities",
    title: "Utilities",
    icon: <BoxPlotOutlined />,
    ref: "/utilities",
  },
  {
    key: "calendar",
    title: "Economic Calendar",
    icon: <CalendarOutlined />,
    ref: "/economy-calendar",
  },
  {
    key: "Help",
    title: "Help",
    icon: <QuestionCircleOutlined />,
    ref: "/help",
  },
  // {
  //   key: "m1",
  //   title: "m1",
  //   icon: <BookOutlined />,
  //   submenu: [
  //     {
  //       key: "sm1",
  //       ref: "/sm1",
  //       title: "sm1",
  //     },
  //     {
  //       key: "sm2",
  //       ref: "/sm2",
  //       title: "sm2",
  //     },
  //   ],
  // },
];
