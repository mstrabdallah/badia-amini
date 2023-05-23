
import style from './style/header.module.scss'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import Login from '../../components/login/login'
import Menu from './sections/menu'
import LangDropDown from './sections/langDropdown'
import UserDropdown from './sections/userDropdown'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'antd';
function HeaderApp() {
  const router = useRouter();
  const { checkUser } = useSelector(({ auth }) => auth);


  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10)
    })
  })
  return (
    <>
      <header className={style.headerPages}>
        <div className={`container_` + (scroll ? " headerS2" : "")}>

          <div className="header_center flex__">

            <div className="header_sec1 flex__">
              <Menu />

              <div className='logo'>
                <Link href="/"><a>
                  <Image src={'/images/logo.svg'} width={158} height={54} />
                </a></Link>
              </div>


              <ul className="flex__ header_sec2">
                <li className={router.pathname === "/cars-insurance" ? "active" : ""}>
                  <Link href="/cars-insurance"><a>تأمين السيارات</a></Link>
                </li>

                <li className={router.pathname === "/medical-insurance" ? "active" : ""}>
                  <Link href="/medical-insurance"><a>التأمين الطبي</a></Link>
                </li>


                <li className={router.pathname === "/general-insurance" ? "active" : ""}>
                  <Link href="/general-insurance"><a>التأمين العام</a></Link>
                </li>

                <li className={router.pathname === "/travel-insurance" ? "active" : ""}>
                  <Link href="/travel-insurance"><a>تأمين السفر</a></Link>
                </li>

                <li className={router.pathname === "/connect-us" ? "active" : ""}>
                  <Link href="/connect-us"><a>تواصل معنا</a></Link>
                </li>


              </ul>
            </div>

            <div className="flex_ header_sec3">
              {
                !checkUser ? <Login /> : <UserDropdown />
              }


              <LangDropDown />
            </div>

          </div>
        </div>
      </header>
    </>

  )
}

export default HeaderApp;