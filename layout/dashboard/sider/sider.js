import style from "./style/sider.module.scss";
import { Layout, Menu, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";



function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(
    "لوحة التحكم",
    "/dashboard",
    <div className="icons MenuHomeIcon" />,
    null
  ),

  getItem(
    "استرجاع وثيقة التأمين",
    "/dashboard/recovery",
    <div className="icons menuRecovery" />,
    null
  ),
  getItem(
    "وثائق تم شراؤها",
    "/dashboard/purchaseddocs",
    <div className="icons menuPurchasedDocs" />,
    null
  ),

  getItem(
    "الهويات المسجله",
    "/dashboard/identities",
    <div className="icons menuIds" />,
    null
  ),
  getItem(
    "المركبات المسجله",
    "/dashboard/cars",
    <div className="icons menuVehicles"></div>,
    null
  ),
  getItem(
    "الاعدادات",
    "/dashboard/settings",
    <div className="icons MenuSettingIcon"></div>,
    null
  ),
  getItem("شاركنا رأيك", "/dashboard/rate",
    <div className="icons menuStart"></div>,
    null),
  getItem(
    "تسجيل الخروج",
    "/dashboard/logout",
    <div className="icons MenuLogoutIcon"></div>,
    null
  ),
];

export default function SiderLayout() {

  const size = useWindowSize();


  const router = useRouter();
  const { asPath } = useRouter();

  const { Sider } = Layout;

  useEffect(() => {
    setCurrent(asPath);
    // setOpenKeys(asPath)
  }, []);
  //
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("1");
  const [openKeys, setOpenKeys] = useState([""]);

  //
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick = (e) => {
    if (e.key === "/") setOpenKeys([null]);
    router.push(e.key);
    setCurrent(e.key);
  };

  const rootSubmenuKeys = ["/", "/orders", "/products", "/clients"];

  const onOpenChange = (e) => {
    const latestOpenKey = e.find((e) => openKeys.indexOf(e) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(e);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  useEffect(() => {
    if (size.width <= 992) {
      setCollapsed(true)
    } else if (size.width > 992) {
      setCollapsed(false)
    }
  }, [size.width])

  return (

    <div className={style.antLayoutSiderPage}>
      <Sider className="antLayoutSider" collapsed={collapsed}>
        <div className={style.siderP}>
          <div className={"logo"}>
            <img src="/images/logo.svg" />
          </div>



          <Menu
            style={{ minWidth: 0, flex: "auto" }}
            defaultSelectedKeys={["1"]}
            selectedKeys={[current]}
            onClick={onClick}
            mode="inline"
            onOpenChange={onOpenChange}
            inlineCollapsed={collapsed}
            items={items}
            selectable={false}
            openKeys={openKeys}
          />
        </div>


      </Sider>
    </div>

  );
}
