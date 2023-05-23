import { Col, Form, Input, Row, Tabs } from "antd";
import Image from "next/image";
export default function InsuranceCoverage() {

    return (
        <>
            <section className="InsuranceCoverage headSectionsWaveS3">
                <div className="container_">

                    <header className="headSections3">
                        <h2>
                            أيش هي التغطية التأمينية والفئة اللي ممكن أختارها لموظفي شركتي؟
                        </h2>
                        <p>
                            فيه عدة فئات تأمين تقدر تختار منها لموظفيك وتابعيهم من خلال تأميني، حوالي الخمس فئات
                            <br />
                            وبعد اختيارك للفئة المناسبة لكل مؤمن له عندك، تقدر تشوف الأسعار مفصلة وشبكة المزودين وحدود التغطيات                        </p>
                    </header>


                    <div className="content">

                        <Row gutter={50}>
                            <Col xs={24} >

                                <div className="InsuranceCoverageItem">
                                    <div>
                                        <div className="Image_">
                                            <Image src="/images/insuranceCoverageMedical1.png" width={49} height={40} />
                                        </div>
                                    </div>
                                    <div className="content_">
                                        <h3>مزودي الرعاية الطبية</h3>
                                        <p>وهي قائمة المستشفيات والمراكز الطبية والصيدليات المتاحة في الوثيقة، ومن هذه القائمة تقدر تشوف وجود مقدم الرعاية الطبية حسب كل فئة من فئات التأمين، هل هو متاح أو غير متاح أو تحويل في الحالات الطارئة.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} >
                                <div className="InsuranceCoverageItem">
                                    <div>
                                        <div className="Image_">
                                            <Image src="/images/insuranceCoverageMedical2.png" width={42} height={42} />
                                        </div>
                                    </div>
                                    <div className="content_">
                                        <h3>حدود التغطيات والمنافع</h3>
                                        <p>أكيد يهمك تعرف حدود التغطيات اللي راح توفرها الوثيقة، ولذلك تأميني يخليك تشوف تفاصيل كل عرض سعر وأيش يتضمن من منافع، زي نسبة التحمل اللي على المؤمن له عند كل مراجعة، حدود تغطية علاج الأسنان، ومنافع الحصول على النظارات الطبية، وحتى تسعيرة المراجعات الطبية حسب اختصاص الطبيب اللي تحتاجه.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={24} >
                                <div className="InsuranceCoverageItem">
                                    <div>
                                        <div className="Image_">
                                            <Image src="/images/insuranceCoverageMedical3.png" width={44} height={46} />
                                        </div>
                                    </div>
                                    <div className="content_">
                                        <h3>أسعار المؤمن لهم</h3>
                                        <p>راح تحتاج تعرف سعر تأمين كل موظف وتابع عندك بالشركة، وعشان كذا تأميني يتيح لك تشوف سعر كل مؤمن له بفئة التأمين اللي اخترتها، وحتى تقدر تقارن بين سعر الفرد في أكثر من عرض سعر من شركات تأمين مختلفة.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </div>
            </section>
        </>


    )
}
