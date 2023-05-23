import { Col, Row } from "antd";
import Image from "next/image";
import { BsArrowDown } from 'react-icons/bs'

export default function HeadSection() {

    const ScrollDown = () => {
        var element = document.getElementById("scroll");
        element.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <>
            <section className="headSection">
                <div className="container_">
                    <Row>
                        <Col xs={24} md={12}>
                            <div className="content">
                                <h1>
                                    مستر أمني الموقع الأول
                                    <br />
                                    لمقارنة أسعار التأمين
                                </h1>

                                <p>
                                    20+ شركة تأمين معتمدة - خيارات متعددة – وثيقة تأمين فورية
                                </p>

                                <div className="downIcon" onClick={() => ScrollDown()}>
                                    <BsArrowDown />
                                </div>
                            </div>
                        </Col>

                        <Col xs={24} md={12}>
                            <div className="image_" >
                                <Image src={'/images/headSection.png'} height={551} width={500} />
                            </div>
                        </Col>
                    </Row>
                    <div id="scroll"></div>
                </div>
            </section>
        </>


    )
}
