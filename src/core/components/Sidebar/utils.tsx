import {
  BoxPlotOutlined,
  CalendarOutlined,
  CreditCardOutlined,
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
    key: "billing",
    title: "Billing",
    icon: <CreditCardOutlined />,
    ref: "/billing/my-plan",
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
    key: "news-calendar",
    title: "News Calendar",
    icon: <CalendarOutlined />,
    ref: "/news-calendar",
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
  //   icon: <QuestionCircleOutlined />,
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
