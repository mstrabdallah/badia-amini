import { Col, Row } from "antd";
import Image from "next/image";
import { BsArrowDown } from 'react-icons/bs'
import ButtonsS1 from '../../tools/buttons/buttonsS1'

export default function StepsToBuy({ data }) {

    return (
        <>
            <section className="StepsToBuy headSectionsWaveS1">
                <div className="container_">
                    <header className="headSections">
                        <h2>{data.title}</h2>
                        <p>{data.des}</p>
                    </header>
                    <Row gutter={40}>


                        <Col xs={24} md={12} >
                            <div className="StepsToBuyItem flex_">
                                <div className="Image">
                                    <Image src={'/images/StepsToBuy_Step1.png'} height={50} width={50} />
                                </div>
                                <h3>سجل حساب أو أدخل لحسابك<br />
                                    واختر نوع التأمين الذي تريده</h3>
                            </div>
                        </Col>
                        <Col xs={24} md={12}>
                            <div className="StepsToBuyItem flex_">
                                <div className="Image">
                                    <Image src={'/images/StepsToBuy_Step2.png'} height={50} width={50} />
                                </div>
                                <h3>
                                    ادخل المعلومات المطلوبة في الاستمارة<br />
                                    الموضحة أمامك
                                </h3>
                            </div>
                        </Col>


                        <Col xs={24} md={12}>
                            <div className="StepsToBuyItem flex_">
                                <div className="Image">
                                    <Image src={'/images/StepsToBuy_Step3.png'} height={50} width={50} />
                                </div>
                                <h3>
                                    قارن بين عروض الأسعار، الشبكات
                                    <br />     والمنافع
                                </h3>
                            </div>
                        </Col>


                        <Col xs={24} md={12}>
                            <div className="StepsToBuyItem flex_">
                                <div className="Image">
                                    <Image src={'/images/StepsToBuy_Step4.png'} height={50} width={50} />
                                </div>
                                <h3>
                                    اختر عرض السعر وادفع بشكل إلكتروني<br />  واحصل على الوثيقة
                                </h3>
                            </div>
                        </Col>
                    </Row>

                    <div className="ButtonsS1_ flexCenter">
                        <ButtonsS1 text={data.sub} />
                    </div>
                </div>
            </section>
        </>


    )
}
