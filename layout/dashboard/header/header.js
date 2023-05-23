import { useState } from "react";
import { Button, Col, Dropdown, Input, Layout, Menu, Row } from "antd";
import { FiSearch } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import style from "./style/header.module.scss";
import Link from "next/link";
function HeaderApp() {
  const { Header } = Layout;


  const menu = (
    <Menu
      items={[
        {
          label: <Link href={"/dashboard/anti-third-party-insurance"}>وثيقة تامين ضد الغير</Link>,
          key: '0',
        },

        {
          label: <Link href={"/dashboard/comprehensive-vehicle-insurance"}>وثيقة تامين شامل للمركبات</Link>,
          key: '1',
        }
      ]}
    />
  );
  return (
    <>
      <Header className={style.headerPages}>
        <div className="container_">
          <div className="headerPages_">


            <div className="Htitle">
              <h2>اهلا بعودتك</h2>
              <p>اي تأمين تريد شراؤه اليوم؟</p>
            </div>


            <div className="Hsearch">
              <Input
                placeholder="رقم الهويه/ الاستماره/ البطاقه الجمركيه"
                prefix={<FiSearch />}
              />
            </div>

            <div className="hBtn">
              <Dropdown overlay={menu} trigger={['click']} overlayClassName={'DropdownS1'}>

                <Button className="flex_">
                  <FiPlus />
                  <span>شراء وثيقة تأمين جديده</span>
                </Button>
              </Dropdown>
            </div>

          </div>
        </div>
      </Header>
    </>
  );
}

export default HeaderApp;
