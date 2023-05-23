import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { BsArrowDown } from 'react-icons/bs'
import ButtonsS1 from '../../tools/buttons/buttonsS1'

export default function TypeOfInsurance() {

    return (
        <>
            <section className="TypeOfInsurance headSectionsWaveS1">
                <div className="container_">
                    <header className="headSections">
                        <h2>اختر نوع التأمين المفضل لديك</h2>
                        <p>تستطيع اختيار نوع التأمين ليظهر لك اقتراحات شركات التأمين التي يقدمها مستر أمني.</p>
                    </header>
                    <Row gutter={20}>


                        <Col xs={24} md={12} className="flexCenter">
                            <div className="TypeOfInsuranceItem">
                                <div className="Image2">
                                    <Image src={'/images/TypeOfInsuranceItem1.png'} height={282} width={390} />
                                </div>
                                <Link href={"/cars-insurance"}><a>
                                    <ButtonsS1 text={'تأمين سيارات'} />
                                </a></Link>
                            </div>
                        </Col>
                        <Col xs={24} md={12} className="flexCenter ">
                            <div className="TypeOfInsuranceItem">
                                <div className="Image">
                                    <Image src={'/images/TypeOfInsuranceItem2.png'} height={300} width={390} />
                                </div>
                                <Link href={"/medical-insurance"}><a>
                                    <ButtonsS1 text={'تأمين طبي'} />
                                </a></Link>
                            </div>
                        </Col>

                        <Col xs={24} md={12} className="flexCenter">
                            <div className="TypeOfInsuranceItem">
                                <div className="Image3">
                                    <Image src={'/images/TypeOfInsuranceItem3.png'} height={300} width={400} />
                                </div>
                                <Link href={"/general-insurance"}><a>
                                    <ButtonsS1 text={'تأمين عام'} />
                                </a></Link>
                            </div>
                        </Col>


                        <Col xs={24} md={12} className="flexCenter">
                            <div className="TypeOfInsuranceItem">
                                <div className="Image4">
                                    <Image src={'/images/TypeOfInsuranceItem4.png'} height={380} width={500} />
                                </div>
                                <Link href={"/travel-insurance"}><a>
                                    <ButtonsS1 text={"تأمين سفر"} />
                                </a></Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>


    )
}
