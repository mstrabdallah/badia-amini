import Head from "next/head";
import { useState } from "react";
import { ConfigProvider } from "antd";
import { Layout } from "antd";
import SiderLayout from "./sider/sider";
import HeaderApp from "./header/header";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
function LayoutApp({ children }) {
  const { Content } = Layout

  //
  const router = useRouter()
  // const { checkUser } = useSelector(({ auth }) => auth);

  // if (!checkUser) return router.push('/')

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ConfigProvider direction="rtl">
        <div className="dashboard">
          <Layout>
            <SiderLayout />
            <Layout>
              <HeaderApp />
              <Content>
                <div className="dashboard">{children}</div>
              </Content>
            </Layout>
          </Layout>
        </div>
      </ConfigProvider>
    </>
  );
}

export default LayoutApp;
