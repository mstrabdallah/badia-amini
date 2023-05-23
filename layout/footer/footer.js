import { Col, Layout, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import style from './footer.module.scss'
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import { GrFacebookOption } from 'react-icons/gr'
export default function Footer() {


  return (
    <>
      <footer className={style.footer + ' container_'}>

        <Row gutter={20}>
          <Col xs={24} md={24} lg={7}>
            <div className="logo">
              <Link href="/"><a>
                <Image src={'/images/logo.svg'} width={158} height={54} />
              </a></Link>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <div className="footerUl">
              <ul>
                <li>
                  <Link href="/"><a>
                    سياسة الخصوصية
                  </a>
                  </Link>
                </li>

                <li>
                  <Link href="/"><a>
                    الشروط والاحكام
                  </a>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={24}  sm={12} lg={6}>
            <div className="footerUl">
              <ul>
                <li>
                  <Link href="/"><a>
                    سياسة الخصوصية
                  </a>
                  </Link>
                </li>

                <li>
                  <Link href="/"><a>
                    الشروط والاحكام
                  </a>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={24} md={24} lg={5}>
            <div className="socail">
              <ul className="flex_">
                <li>
                  <Link href="/"><a><GrFacebookOption />
                  </a>
                  </Link>
                </li>

                <li>
                  <Link href="/"><a><AiOutlineTwitter />
                  </a>
                  </Link>
                </li>

                <li>
                  <Link href="/"><a><AiFillYoutube />
                  </a>
                  </Link>
                </li>

                <li>
                  <Link href="/"><a><AiFillInstagram />
                  </a>
                  </Link>
                </li>

              </ul>
            </div>
            <div className="cc">
              <p>جميع الحقوق محفوظة © باديا تك 2022</p>
            </div>
          </Col>
        </Row>
      </footer>
    </>

  );
}
