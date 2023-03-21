import {ConfigProvider, notification } from 'antd'
import Head from 'next/head'
import { useEffect } from 'react'
import '../styles/globals.scss'
import { useRouter } from 'next/router'
import { capitalize } from 'lodash'
import {
  getToken,
  // setCookieValue
} from '@/utils/UserManager'
import {useLocalStorage} from "@/hooks/localstorage.hooks";
import { Provider } from 'react-redux'
import store from "@/core/store";

interface Types {
  Component: any
  pageProps: any
}

const MyApp = ({ Component, pageProps }: Types) => {
  const router = useRouter()
  const [profile] = useLocalStorage('profile', null)

  function confirmRoute() {
    let routes = '/login'
    // if (profile && profile.role === 'admin') routes = '/dashboard'
    // if (profile && (profile.role === 'editor' || profile.role === 'developer')) routes = '/chapters'
    // if (profile && profile.role === 'marketing') routes = '/coupons'
    // if (profile && profile.role === 'sales') routes = '/students-communication'
    // else routes = '/login'
    return router.pathname === '/' ? routes : router.pathname
  }

  useEffect(() => {
    router.push({
      pathname: confirmRoute(),
    })
  }, [])

  return (
    <>
      <Head>
        <title>
           CMS | {capitalize(router.pathname.replace(/-/g, ' ').replace('/', ''))}
        </title>
        <meta name="description" content="A BUSINESS SOLUTION" />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://upload-widget.cloudinary.com/2.3.24/global/all.js"
          type="text/javascript"
        />
      </Head>
      <ConfigProvider>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
      </ConfigProvider>
    </>
  )
}

export default MyApp
