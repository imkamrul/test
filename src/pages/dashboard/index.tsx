import { Layout } from 'antd'
import React from 'react'
import Dashboard from '../../core/layouts/Dashboard'
const DashboardPage = () => {
  return (
    <Dashboard>
      <Layout.Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 'calc(100vh - 124px)',
        }}
      >
        Welcome to  Dashboard!
      </Layout.Content>
    </Dashboard>
  )
}

export default DashboardPage
