import { Col, DatePicker, Form, Input, Row, Tabs } from "antd";
import { useState } from "react";
import ButtonsS1 from "../../tools/buttons/buttonsS1";
import InputS1 from '../../tools/inputs/inputS1'
export default function HeadSection() {

    const { TabPane } = Tabs;
    const dateFormat = 'YYYY/MM/DD';
    const [tabValue, setTabValue] = useState(1)

    const changeTabs = (e) => {
        setTabValue(e)
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <section className="headSection headSectionsWaveS2">
                <div className="container_">

                    <header className="headSections">
                        <h2>التأمين العام للمنشآت الصغيرة والمتوسطة</h2>
                        <p>
                            قارن عروض التأمين العام من عدة شركات تأمين واحصل على الوثيقة المناسبة لمنشأتك.
                        </p>
                    </header>


                    <div className="content">


                        <div className="TabPaneContent">
                            <Form
                                name="basic"

                                layout="vertical"

                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <Row gutter={10}>


                                    <Col xs={24} md={12} lg={12}>
                                        <div className="input">
                                            <InputS1>
                                                <Form.Item
                                                    label="رقم الهوية / الاقامة / الشركة"
                                                    name="email"
                                                    rules={[
                                                        {
                                                            pattern: /^(0|[1-9]\d*)(\.\d+)?$/,
                                                            message: 'هذا الحقل يجب أن يحتوي على ارقام انجليزي فقط',
                                                        },
                                                        {
                                                            required: true,
                                                            message: 'هذا الحقل مطلوب.',

                                                        },
                                                    ]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </InputS1>
                                        </div>
                                    </Col>
                                    <Col xs={24} md={12} lg={12} >
                                        <div className="input">
                                            <InputS1>
                                                <Form.Item
                                                    label="متى تريد أن يبدأ تاريخ سريان الوثيقة ؟"
                                                    name="time"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'هذا الحقل مطلوب.',
                                                        },
                                                    ]}
                                                >
                                                    <DatePicker placeholder={''} format={dateFormat} />

                                                </Form.Item>
                                            </InputS1>
                                        </div>
                                    </Col>
                                    <Col xs={24} md={12} lg={24} >
                                        <div className="ButtonsS1_ flexCenter">
                                            <ButtonsS1 disabled={true} text={'اشتر الآن'} />
                                        </div>
                                    </Col>


                                </Row>
                            </Form>
                        </div>



                    </div>

                </div>
            </section>
        </>


    )
}
