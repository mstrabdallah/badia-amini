import { Col, Row } from "antd";
import Image from "next/image";
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
                    <Row>


                        <Col xs={24} md={12} className="flexCenter">
                            <div className="TypeOfInsuranceItem">
                                <div className="Image2">
                                    <Image alt="type 1" src={'/images/TypeOfInsuranceItem1.png'} height={287} width={390} />
                                </div>
                                <ButtonsS1 text={'تأمين سيارات'} />
                            </div>
                        </Col>
                        <Col xs={24} md={12} className="flexCenter">
                            <div className="TypeOfInsuranceItem">
                                <div className="Image">
                                    <Image alt="type 2" src={'/images/TypeOfInsuranceItem2.png'} height={277} width={390} />
                                </div>
                                <ButtonsS1 text={'تأمين طبي'} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>


    )
}
