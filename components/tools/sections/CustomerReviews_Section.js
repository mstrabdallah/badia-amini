import { Col, Row } from "antd";
import Image from "next/image";
import ButtonsS1 from '../../tools/buttons/buttonsS1'

export default function CustomerReviews({ title, des }) {

    const data = [{}, {}, {},]
    return (
        <>
            <section className="CustomerReviews ">
                <div className="container_ ">



                    <div className="content headSectionsWaveS3">
                        <Row gutter={40}>

                            <Col xs={24} md={12} lg={10} className="flexCenter">
                                <div className="CustomerReviewsItem">

                                    <div className="child1">
                                        <div className="wave_line"></div>
                                        <h3 dangerouslySetInnerHTML={{ __html: title }} />
                                        <p dangerouslySetInnerHTML={{ __html: des }} />

                                        <div className="ButtonsS1_ flexCenter hide-md">
                                            <ButtonsS1 text={'شراء تأمين الآن'} />
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={24} md={12} lg={14} className="flexCenter">

                                <div className="CustomerReviewsItem">

                                    <div className="child2">

                                        {
                                            data.map((res, i) =>
                                                <div className="comment" key={i}>
                                                    <div className="flex_">
                                                        <div className="image_">
                                                            <Image src={'/photos/UserIcon.png'} height={58} width={58} />
                                                        </div>
                                                        <div className="user">
                                                            <h4>أدهم حسين</h4>
                                                            <p>المدير التنفيذي لشركة بوبر</p>
                                                        </div>
                                                    </div>

                                                    <div className="comment_content">
                                                        استخدمت التأمين الطبي لموظفيني .. سلس التعامل ومش بياخد وقت طويل .. اقترحه وبشدة.
                                                    </div>
                                                </div>
                                            )
                                        }



                                    </div>
                                </div>
                            </Col>

                            <Col xs={24} className="show-md">
                                  <div className="CustomerReviewsItem_subMobile">
                                    <div className="ButtonsS1_ flexCenter">
                                        <ButtonsS1 text={'شراء تأمين الآن'} />
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
