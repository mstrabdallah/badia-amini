import { Button, Drawer, Radio, Space } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi'
import { useSelector } from 'react-redux';
import Login from '@components/login/login';
import ButtonsS1 from '@components/tools/buttons/buttonsS1'
const App = () => {
  const [visible, setVisible] = useState(false);
  const { checkUser } = useSelector(({ auth }) => auth);

  const router = useRouter();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };



  return (
    <>
      <div className='menuPage'>
        <div className='menuPageBtn' onClick={showDrawer}>
          <ButtonsS1 text={<HiMenuAlt1 />} />

        </div>
        <Drawer
          placement={'right'}
          closable={false}
          onClose={onClose}
          visible={visible}
          key={'right'}
          className={'menuPageDrawer'}
        >
          <div className='menuPageHeader' onClick={onClose}>
            <ButtonsS1 text={<HiMenuAlt1 />} />
          </div>

          <div className='content'>
            <ul>

              <li className={router.pathname === "/" ? "active" : ""} onClick={onClose}>
                <Link href="/"><a>الرئيسية</a></Link>
              </li>

              <li className={router.pathname === "/cars-insurance" ? "active" : ""} onClick={onClose}>
                <Link href="/cars-insurance"><a>تأمين السيارات</a></Link>
              </li>

              <li className={router.pathname === "/medical-insurance" ? "active" : ""} onClick={onClose}>
                <Link href="/medical-insurance"><a>التأمين الطبي</a></Link>
              </li>

              <li className={router.pathname === "/general-insurance" ? "active" : ""} onClick={onClose}>
                <Link href="/general-insurance"><a>التأمين العام</a></Link>
              </li>

              <li className={router.pathname === "/travel-insurance" ? "active" : ""} onClick={onClose}>
                <Link href="/travel-insurance"><a>تأمين السفر</a></Link>
              </li>



              <li className={router.pathname === "/connect-us" ? "active" : ""} onClick={onClose}>
                <Link href="/connect-us"><a>تواصل معنا</a></Link>
              </li>
              {
                !checkUser ?

                  <li onClick={onClose}>  <Login /></li>

                  :
                  <>
                    <li className={"activeLi"} onClick={onClose}>
                      <Link href="/dashboard"><a>لوحة التحكم</a></Link>
                    </li>

                  </>
              }


            </ul>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default App;