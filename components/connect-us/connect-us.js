import { Button, Col, Form, Input, Row } from 'antd'
import style from './styles/connect-us.module.scss'
import InputS1 from '../tools/inputs/inputS1'
import ButtonsS1 from '../tools/buttons/buttonsS1';
import StillHaveQuestions from '../tools/sections/stillHaveQuestions'
import Image from 'next/image';
import {HiArrowNarrowRight} from 'react-icons/hi'
export default function ConnectUs() {


    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <section className={style.ConnectUsPage}>
            <div className='container_'>
                <div className='page_ pageS1'>


                    <header>
                        <h1>تواصل مع فريقنا للدعم الفني</h1>
                        <p>اذا تحتاج مساعدتنا .. لا تتردد في ارسال رسالة لنا أو تواصل معنا مباشرة عن طريق الارقام الموضحة بالاسفل.</p>
                    </header>

                    <div className='content'>
                        <div className='bg'></div>
                        <div className='form'>
                            <Form
                                name="basic"
                                layout="vertical"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >

                                <div className="input">
                                    <InputS1>
                                        <Form.Item
                                            label="الاسم بالكامل"
                                            name="name"
                                            rules={[

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


                                <div className="input">
                                    <InputS1>
                                        <Form.Item
                                            label="البريد الالكتروني"
                                            name="email"
                                            rules={[
                                                {
                                                    type: 'email',
                                                    message: 'يجب ان يكون بصيغة بريد الكتروني',
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

                                <div className="input">
                                    <InputS1>
                                        <Form.Item
                                            label="رسالتك أو استفسارك"
                                            name="msg"
                                            rules={[
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


                                <div className="ButtonsS1_ flexCenter">
                                    <ButtonsS1 text={'ارسال'} />
                                </div>

                            </Form>
                        </div>
                    </div>

                </div>

                <div className='ConnectUsItems'>
                    <Row getters={50}>
                        <Col xs={24} lg={8} className={'flexCenter'}>
                            <div className='ConnectUsItem'>
                                <Image src={'/icons/connectUsUser.svg'} width={64} height={64} />
                                <h2>الدعم الفني</h2>
                                <p>تحقق من الموارد المفيدة والأسئلة الشائعة.</p>
                                <div className='footer_'>
                                    <Button><HiArrowNarrowRight /> مركز المساعدة </Button>
                                </div>
                            </div>
                        </Col>

                        <Col xs={24} lg={8} className={'flexCenter'}>
                            <div className='ConnectUsItem'>
                                <Image src={'/icons/connectUsPhone.svg'} width={64} height={64} />
                                <h2>اتصل بنا</h2>
                                <p>اتصل بنا للتحدث إلى أحد أعضاء فريقنا. ن<br />حن دائما سعداء للمساعدة.</p>
                                <div className='footer_'>
                                    +1 (646) 786-5060
                                </div>
                            </div>
                        </Col>


                        <Col xs={24} lg={8} className={'flexCenter'}>
                            <div className='ConnectUsItem'>
                                <Image src={'/icons/connectUsMail.svg'} width={64} height={64} />
                                <h2>راسلنا</h2>
                                <p>راسلنا عبر البريد الإلكتروني للاستفسارات العامة ،<br /> بما في ذلك فرص التسويق والشراكة.</p>
                                <div className='footer_'>
                                    hello@helpcenter.com
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <StillHaveQuestions />
        </section>

    )
}
