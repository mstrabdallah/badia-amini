import { Col, Form, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import ButtonsS1 from '../../tools/buttons/buttonsS1'

export default function StillHaveQuestions() {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <section className="StillHaveQuestions headSectionsWaveS1">
                <div className="container_">
                    <header className="headSections">
                        <h2>ما زال لديك أسئلة ؟</h2>
                        <p>تواصل معنا الآن بارسال رسالة وسيتم الرد عليك في خلال 48 ساعة.</p>
                    </header>

                    <div className="content">
                        <Form
                            name="basic"

                            layout="vertical"

                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Row gutter={10}>


                                <Col xs={24} md={12} lg={8} >
                                    <div className="input">
                                        <Form.Item
                                            label="عنوان البريد الالكتروني"
                                            name="email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'هذا الحقل مطلوب.',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </div>
                                </Col>
                                <Col xs={24} md={12} lg={8} >
                                    <div className="input">
                                        <Form.Item
                                            label="سؤالك"
                                            name="quetion"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'هذا الحقل مطلوب.',
                                                },
                                            ]}
                                        >
                                            <TextArea autoSize={{
                                                minRows: 1,
                                                maxRows: 6,
                                            }} />

                                        </Form.Item>
                                    </div>
                                </Col>
                                <Col xs={24} md={12} lg={8} >
                                    <div className="ButtonsS1_ flexCenter">
                                        <ButtonsS1 text={'أرسل سؤالك'} />
                                    </div>
                                </Col>


                            </Row>
                        </Form>
                    </div>
                </div>
            </section>
        </>


    )
}
