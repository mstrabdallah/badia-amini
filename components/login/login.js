import style from './styles/login.module.scss'

import React, { useState } from 'react';
import ButtonsS1 from '../tools/buttons/buttonsS1';
import InputS1 from '../tools/inputs/inputS1'
import { Col, Form, Input, Row, Tabs, Modal } from "antd";
import Link from 'next/link';
import Register from '../register/register'
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../../store/slices/auth/loginSlice';
import MsgApi from '../tools/msg/msgApi';
import useTranslation from 'next-translate/useTranslation';
import { useCookies } from 'react-cookie';
export default function Login() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const { loading, apiErrors } = useSelector(({ login }) => login)

    const [_, setCookie] = useCookies()
    const { t } = useTranslation('common')

    const dispatch = useDispatch()
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const { TabPane } = Tabs;
    const [tabValue, setTabValue] = useState(1)

    const changeTabs = (e) => {
        setTabValue(e)
    }

    const onFinish = (values) => {

        dispatch(
            loginThunk(values)).unwrap().then((res) => {
                setCookie('AToken', res.data?.token, { path: '/', expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 60 * 17) });
                setCookie('AUser', res.data?.user, { path: '/', expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 60 * 17) });
                window.location.href = "/dashboard"

            })

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <>
            <section className={`${style.loginPage} loginPage_`}>


                <div onClick={showModal}>
                    <ButtonsS1 text={'التسجيل'} />
                </div>
                <Modal
                    title=""
                    className='loginPageModel'
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={null}
                    header={null}
                >
                    <div className={`content tab${tabValue}`}>
                        <Tabs defaultActiveKey="1" onChange={changeTabs} type="card" >
                            <TabPane tab="تسجيل الدخول" key="1">

                                <div className="TabPaneContent">
                                    <Form
                                        name="basic"

                                        layout="vertical"

                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                    >


                                        <Row gutter={10}>
                                            <Col xs={24}>
                                                <div className="input">
                                                    <InputS1>
                                                        <Form.Item
                                                            label="البريد الالكتروني"
                                                            name="email"
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: 'هذا الحقل مطلوب.',
                                                                }
                                                            ]}
                                                            validateStatus={apiErrors?.errors?.email && 'error'}
                                                            help={t(apiErrors?.errors?.email)}
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                    </InputS1>
                                                </div>
                                            </Col>
                                            <Col xs={24}  >
                                                <div className="input">
                                                    <InputS1>
                                                        <Form.Item
                                                            label="كلمة السر"
                                                            name="password"
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: 'هذا الحقل مطلوب.',
                                                                },
                                                            ]}
                                                        >
                                                            <Input.Password />

                                                        </Form.Item>
                                                    </InputS1>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12} lg={24} >
                                                <div className="ButtonsS1_ flexCenter">
                                                    <ButtonsS1 loading={loading} type={'submit'} text={'تسجيل الدخول'} />
                                                </div>
                                            </Col>

                                            <Col xs={24} md={12} lg={24} >
                                                <MsgApi apiErrors={apiErrors} />
                                            </Col>

                                            <div className='forget'>
                                                <Link href={'/##'}>
                                                    <a >نسيت كلمة المرور ؟</a>
                                                </Link>
                                            </div>
                                        </Row>
                                    </Form>
                                </div>
                            </TabPane>
                            <TabPane tab="تسجيل حساب جديد" key="2">

                                <div className="TabPaneContent">
                                    <Register />

                                </div>

                            </TabPane>

                        </Tabs>
                    </div>
                </Modal>
            </section>
        </>


    )
}
