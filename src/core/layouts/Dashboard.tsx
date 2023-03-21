import React, { useEffect, useState } from 'react'
import Topbar from '../components/TopBar'
import Index from '../components/Sidebar'
import { Breadcrumb, Layout, notification } from 'antd'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useLocalStorage } from '@/hooks/localstorage.hooks'

const { Content } = Layout

const Dashboard = ({ children }: any) => {
  const [hasMounted, setHasMounted] = useState(false)
  const [routes, setRoutes] = useState<string[]>([])
  const [hlinks, setHlinks] = useState<string[]>([])
  const router = useRouter()

  const processBreadcum = () => {
    let route = router.route.split('/')
    let str = ''
    let hlink: string[] = []
    route.forEach((i, index, arr) => {
      if (i.charAt(0) == '[') {
        i = i.slice(1)
        i = i.slice(0, i.length - 1)
        // console.log(i)
        arr[index] = router.query[i] as string
      }
      str = str + arr[index] + '/'
      hlink.push(str)
    })
    route.shift()
    hlink.shift()
    setRoutes(route)
    setHlinks(hlink)
  }

  const [profile] = useLocalStorage('profile', null)

  useEffect(() => {
    setHasMounted(true)
    processBreadcum()
  }, [])

  // useEffect(() => {
  //   if (!profile) {
  //     router.push('/')
  //   }
  // }, [profile])

  // if (!hasMounted || !profile) {
  //   return null
  // }

  return (
    <Layout>
      <Topbar />
      <Layout>
        <Index />
        <Layout style={{ padding: '62px 24px 24px 24px' }}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link href="/dashboard" className="text-capitalize">
                Dashboard
              </Link>
            </Breadcrumb.Item>
            {hlinks.map((link, i) => (
              <Breadcrumb.Item key={i}>
                <Link href={link} className="text-capitalize">
                    {routes && routes[i] && routes[i].replace(/-/g, ' ')}
                </Link>
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <Content
            // className="site-layout-background"
            style={{
              padding: 0,
              margin: 0,
              minHeight: 'calc(100vh - 124px)',
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Dashboard
