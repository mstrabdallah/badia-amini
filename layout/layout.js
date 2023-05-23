import Head from "next/head";
import { useEffect, useState } from "react";
import { ConfigProvider } from 'antd';
import { Layout } from 'antd';
import HeaderApp from './header/header'
import Footer from "./footer/footer";
import { useDispatch, useSelector } from "react-redux";
import DashboardLayout from './dashboard/layout'
import { useRouter } from "next/router";
import { setFirstLoad } from "../store/slices/auth/authSlice";
import LoadingScreen from "./loadingScreen/loadingScreen"
function LayoutApp({ children }) {

    const router = useRouter();
    const [checkDashboard, setCheckDashboard] = useState();

    const { firstLoad } = useSelector(({ auth }) => auth);

    const dispatch = useDispatch();
    useEffect(() => {
        const checkDashboard = router.pathname.search("dashboard");
        checkDashboard === 1 ?
            setCheckDashboard(true)
            :
            setCheckDashboard(false)

    })

    useEffect(() => {
        setTimeout(() => {
            dispatch(setFirstLoad(true))
        }, 1000)
    }, [])
    return (
        <>
            <Head>
                <title>مستر أمني</title>

                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>


            <ConfigProvider direction="rtl">
                {
                    checkDashboard ?
                        <DashboardLayout>
                            {children}
                        </DashboardLayout>
                        :
                        <>
                            <HeaderApp />
                            <div className="app_">
                                {children}
                            </div>
                            <Footer />
                        </>



                }


            </ConfigProvider>


            {/* {!firstLoad && <LoadingScreen />} */}


        </>

    )
}

export default LayoutApp;