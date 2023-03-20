import {
  AppstoreOutlined,
  BarsOutlined,
  DashboardOutlined,
  DollarCircleOutlined,
  LineChartOutlined,
  NotificationOutlined,
  TransactionOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  LinkOutlined,
  BookOutlined,
} from '@ant-design/icons'

export const MenuList = [
  {
    key: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardOutlined />,
    ref: '/dashboard',
  },
  {
    key: 'm1',
    title: 'm1',
    icon: <BookOutlined />,
    submenu: [
      {
        key: 'sm1',
        ref: '/sm1',
        title: 'sm1',
      },
      {
        key: 'sm2',
        ref: '/sm2',
        title: 'sm2',
      },

    ],
  }
]
