import { Button, Col, Row } from "antd";
import useTranslation from "next-translate/useTranslation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./styles/index.module.scss";
import Image from "next/image";
import { gethome } from "../../../store/slices/index/indexSlice";
import LoadingPageS1 from '../../tools/loading/loadingPageS1'
export default function Home(props) {
  //console.log(\"recharts\")

  const { dataHome, loading } = useSelector(({ index }) => index);
  const { t, lang } = useTranslation("common");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gethome());

  }, []);

  return (
    <>
      <section className={style.indexPage}>
        <div className="container_ page_ bg_none">
          <div className="HomeHead flex_">
            <div className="HomeHeadContent">
              <h1>الموقع الأول لمقارنة أسعار التأمين في المملكة</h1>
              <Button>اعرف المزيد</Button>
            </div>
            <div className="">
              <Image
                width={400}
                height={222}
                src="/images/dash-home-head.png"
              />
            </div>
          </div>

          {

            loading ?
              <LoadingPageS1 />
              :
              <div className="content">
                <div className="homeCards">
                  <h2>الوثائق والفواتير</h2>
                  <div className="flex_ docs">
                    <div className="homeCard flex_">
                      <div className="cardImg">
                        <Image width={40} height={40} src="/icons/docIcon1.svg" />
                      </div>
                      <div className="cardContent">
                        <span>وثائق سارية المفعول</span>
                        <span>{dataHome?.valid_insurances_count} وثائق</span>
                      </div>
                    </div>

                    <div className="homeCard flex_">
                      <div className="cardImg">
                        <Image width={40} height={40} src="/icons/docIcon2.svg" />
                      </div>
                      <div className="cardContent">
                        <span>وثائق قاربت على الإنتهاء</span>
                        <span>{dataHome?.about_to_end_car_insurances_count} وثائق</span>
                      </div>
                    </div>

                    <div className="homeCard flex_">
                      <div className="cardImg">
                        <Image width={40} height={40} src="/icons/docIcon3.svg" />
                      </div>
                      <div className="cardContent">
                        <span> وثائق منتهية الصلاحية</span>
                        <span>{dataHome?.ended_car_insurance_count} وثائق</span>
                      </div>
                    </div>

                    <div className="homeCard flex_">
                      <div className="cardImg">
                        <Image width={40} height={40} src="/icons/docIcon4.svg" />
                      </div>
                      <div className="cardContent">
                        <span>السيارات المسجلة</span>
                        <span>{dataHome?.cars_count} سيارات</span>
                      </div>
                    </div>





                    <div className="homeCard flex_">
                      <div className="cardImg">
                        <Image width={40} height={40} src="/icons/docIcon1.svg" />
                      </div>
                      <div className="cardContent">
                        <span>الهويات المسجله</span>
                        <span>{dataHome?.identities_count} وثائق</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="homeCards2">
                  <h2>الوثائق الحاليه</h2>
                  <Row gutter={40}>
                    {
                      dataHome?.car_insurances.map((res, i) =>
                        <Col xs={24} lg={12}>
                          <div className="homeCard2 flex_">
                            <div className="cardInfo flex_">
                              <div className="card2Img flex_">
                                <Image width={39} height={30} src="/icons/carIcon.svg" />
                              </div>
                              <div className="card2Content">
                                <h3>{res?.identity?.name}</h3>
                                <ul>
                                  <li className="flex__">
                                    <span>رقم الهوية / الإقامة :</span>
                                    <span>{res?.identity?.serial}</span>
                                  </li>
                                  <li className="flex__">
                                    <span>الرقم التسلسلي :</span>
                                    <span>{res?.car?.serial}</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="card2Type flex__">
                              <span>الموديل</span>
                              <span>{res?.car?.model ?? '30 سيدان'}</span>
                            </div>
                          </div>
                        </Col>
                      )
                    }


                  </Row>
                </div>

              </div>
          }

        </div>
      </section>
    </>
  );
}
