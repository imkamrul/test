import Dashboard from "@/core/layouts/Dashboard";
import Public from "@/core/layouts/Public";
import { store } from "@/core/store";
import { useLocalStorage } from "@/hooks/localstorage.hooks";
import { siteTheme } from "@/utils/siteTheme";
import { ConfigProvider } from "antd";
import { capitalize } from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Provider } from "react-redux";
import "../styles/globals.scss";

interface Types {
  Component: any;
  pageProps: any;
}
interface LayoutList {
  [key: string]: React.ComponentType<any>;
}

// ?Layout Object: For listing layout components
const layoutList: LayoutList = {
  dashboard: Dashboard,
  PublicLayout: Public,
};

const MyApp = ({ Component, pageProps }: Types) => {
  // *layout  needs to be applied
  const Layout = layoutList[Component.layout] || Dashboard;
  const router = useRouter();
  const [profile] = useLocalStorage("profile", null);

  function confirmRoute() {
    let routes = "/login";
    // if (profile && profile.role === 'admin') routes = '/dashboard'
    // if (profile && (profile.role === 'editor' || profile.role === 'developer')) routes = '/chapters'
    // if (profile && profile.role === 'marketing') routes = '/coupons'
    // if (profile && profile.role === 'sales') routes = '/students-communication'
    // else routes = '/login'
    return router.pathname === "/" ? routes : router.pathname;
  }

  useEffect(() => {
    router.push({
      pathname: confirmRoute(),
    });
  }, []);

  return (
    <>
      <Head>
        <title>
          Fundednext |{" "}
          {capitalize(router.pathname.replace(/-/g, " ").replace("/", ""))}
        </title>
        <meta name="description" content="Fundednext user dashboard" />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://upload-widget.cloudinary.com/2.3.24/global/all.js"
          type="text/javascript"
        />
      </Head>
      <ConfigProvider
        theme={{
          token: siteTheme,
          components: {
            Input: {
              controlHeightLG: 50,
            },
            Select: {
              controlHeightLG: 50,
            },
            Button: {
              controlHeightLG: 50,
            },
            Form: {
              colorTextLabel: "#595959",
              fontSize: 16,
              fontWeightStrong: 600,
            },
          },
        }}
      >
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ConfigProvider>
    </>
  );
};

export default MyApp;
