import PageHeader from "@/core/Molicules/PageHeader";
import { getToken } from "@/services/auth.service";
import { PageHeaderPropTypes } from "@/types/global.types";
import { Layout } from "antd";
import { useRouter } from "next/router";
import { CSSProperties, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/TopBar";

const { Content } = Layout;

interface DashboardLayoutPropsTypes {
  children: any;
  layoutSettings: {
    pageHeader?: PageHeaderPropTypes;
    contentWrapperStyle?: CSSProperties;
  };
}

const Dashboard = (props: DashboardLayoutPropsTypes) => {
  const { children, layoutSettings } = props;
  const [hasMounted, setHasMounted] = useState(false);
  const [routes, setRoutes] = useState<string[]>([]);
  const [hlinks, setHlinks] = useState<string[]>([]);
  const [token, setToken] = useState<string | undefined>(undefined);
  const router = useRouter();

  const processBreadcum = () => {
    let route = router.route.split("/");
    let str = "";
    let hlink: string[] = [];
    route.forEach((i, index, arr) => {
      if (i.charAt(0) == "[") {
        i = i.slice(1);
        i = i.slice(0, i.length - 1);
        // console.log(i)
        arr[index] = router.query[i] as string;
      }
      str = str + arr[index] + "/";
      hlink.push(str);
    });
    route.shift();
    hlink.shift();
    setRoutes(route);
    setHlinks(hlink);
  };

  useEffect(() => {
    let retrievedToken = getToken();
    if (retrievedToken) {
      setToken(retrievedToken);
    } else {
      router.push("/login");
    }
  }, []);

  return (
    <Layout>
      <Sidebar />
      <Layout className="site-layout">
        <Topbar />
        <Layout.Content
          style={{
            margin: "0",
            padding: "100px 0px",
            minHeight: 280,
            background: "transparent",
            ...layoutSettings?.contentWrapperStyle,
          }}
        >
          {layoutSettings?.pageHeader && (
            <PageHeader options={layoutSettings?.pageHeader} />
          )}
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
