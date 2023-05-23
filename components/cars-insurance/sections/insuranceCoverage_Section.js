import { Col, Form, Input, Row, Tabs } from "antd";
import Image from "next/image";
export default function InsuranceCoverage() {

    return (
        <>
            <section className="InsuranceCoverage headSectionsWaveS3">
                <div className="container_">

                    <header className="headSections3">
                        <h2>
                            إيش هي التغطية التأمينية اللي اختارها للسيارة؟
                        </h2>
                        <p>
                            فيه تغطيتين رئيسيتين يقدمها موقع تأميني تقدر تختار واحدة منهم لتأمين سيارتك.
                        </p>
                    </header>


                    <div className="content">

                        <Row gutter={50}>
                            <Col xs={24} lg={12}>

                                <div className="InsuranceCoverageItem">
                                    <div className="Image_">
                                        <Image src="/images/insuranceCoverage1.png" width={80} height={34} />
                                    </div>
                                    <h3>تأمين ضد الغير (التأمين الإلزامي)</h3>
                                    <p>التأمين ضد الغير للسيارات هو الحد الأدنى من مستوى التغطية التأمينية اللي تحتاجه للقيادة بشكل قانوني على طرق المملكة. يغطي تأمين ضد الغير فقط تكلفة تعويض الآخرين عن الإصابات أو الأضرار التي تسببتها في الحادث لا سمح الله ويحميك بإذن الله من المطالبات القانونية والتعويضات المالية المستحقة للطرف الثالث. هذي التغطية لا توفر لك أي مساعدة أو تعويض مالي في حال إصابتك في الحادث أو إصلاح سيارتك. للمزيد من التفاصيل عن التأمين ضد الغير.</p>
                                </div>
                            </Col>
                            <Col xs={24} lg={12}>
                                <div className="InsuranceCoverageItem">
                                    <div className="Image_">
                                        <Image src="/images/insuranceCoverage2.png" width={52} height={54} />
                                    </div>
                                    <h3>التأمين الشامل</h3>
                                    <p>التأمين الشامل للسيارة يوفر حماية وتغطية كاملة ضد الأضرار التي لحقت بسيارتك بسبب حادث. كما أن أي تأمين شامل يشمل بشكل افتراضي التأمين ضد الغير. بالإضافة إلى ذلك توفر وثيقة التأمين الشامل تغطية لسيارتك ضد الأضرار الناجمة عن الحريق، السرقة (بدون إهمال)، الكوارث الطبيعية (الفيضانات، البرد، العواصف، وما إلى ذلك). للمزيد من التفاصيل عن التأمين الشامل. <br />
                                        وبرضه فيه تغطيات تأمينية أخرى للسيارات نقدمها لك في تأميني وهي تغطيات تم تفصيلها وإضافة مزايا خاصة فيها لتتناسب مع احتياجاتك وميزانيتك.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </div>
            </section>
        </>


    )
}
