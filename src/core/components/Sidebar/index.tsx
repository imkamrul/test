import { PropTypes } from './Sidebar.types'
import { Affix, Layout, Menu } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import React, { Fragment, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MenuList } from './utils'
const { Sider } = Layout
const { SubMenu } = Menu

const Index = (props: PropTypes) => {
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)

  const defaultKeys = {
    selected: [router.pathname === '/' ? 'dashboard' : router.pathname.replace('/', '')],
    open: ['dashboard'],
  }

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme="light"
      width={200}
      className="site-layout-background"
    >
      <Affix offsetTop={68}>
        <Menu
          mode="inline"
          defaultSelectedKeys={defaultKeys.selected}
          defaultOpenKeys={defaultKeys.open}
          style={{
            height: 'calc(100vh - 70px)',
            borderRight: 0,
            overflowX: 'hidden',
            overflowY: 'scroll',
          }}
          className="scrollbar-hidden"
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
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Menu>
      </Affix>
    </Sider>
  )
}

export default Index