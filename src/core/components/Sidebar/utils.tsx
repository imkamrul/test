import {
  BoxPlotOutlined,
  CalendarOutlined,
  CreditCardOutlined,
  HomeOutlined,
  QuestionCircleOutlined,
  SafetyCertificateOutlined,
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
    key: "Certificate",
    title: "Certificate",
    icon: <SafetyCertificateOutlined />,
    ref: "/certificate",
  },
  {
    key: "account-overview",
    title: "Account Overview",
    icon: <UnorderedListOutlined />,
    ref: "/account-overview",
  },
  {
    key: "trading-overview",
    title: "Trading Overview",
    icon: <UnorderedListOutlined />,
    ref: "/trading-overview",
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
