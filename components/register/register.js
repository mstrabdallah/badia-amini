import style from './styles/register.module.scss'

import ButtonsS1 from '../tools/buttons/buttonsS1';
import InputS1 from '../tools/inputs/inputS1'
import { Col, Form, Input, Row, Checkbox, message } from "antd";
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from '../../store/slices/auth/registerSlice';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useCookies } from 'react-cookie';

export default function Register() {

    const [_, setCookie] = useCookies()

    const dispatch = useDispatch()
    const { loading, apiErrors } = useSelector(({ register }) => register)
    const { t } = useTranslation('common')

    const [TermsAndConditionsValue, setTermsAndConditionsValue] = useState()
    const TermsAndConditions = (e) => {
        setTermsAndConditionsValue(e.target.checked)
    }
    const onFinish = (values) => {
        console.log('Success:', values);
        values.password_confirmation = values.password

        dispatch(
            registerThunk(values)).unwrap().then((res) => {

                setCookie('AToken', res?.data?.token, { path: '/', expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 60 * 17) });
                setCookie('AUser', res?.data?.user, { path: '/', expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 60 * 17) });
                window.location.href = "/dashboard"
                message.success('تم إنشاء حسابك بنجاح')

            })

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <section className={style.registerPage}>
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
                                        label="الاسم"
                                        name="name"
                                        rules={[

                                            {
                                                required: true,
                                                message: 'هذا الحقل مطلوب.',

                                            },
                                        ]}
                                    // validateStatus={apiErrors?.errors?.name && 'error'}
                                    // help={t(apiErrors?.errors?.name)}
                                    >
                                        <Input />
                                    </Form.Item>
                                </InputS1>
                            </div>
                        </Col>

                        <Col xs={24}>
                            <div className="input">
                                <InputS1>
                                    <Form.Item
                                        label="رقم الجوال"
                                        name="mobile"
                                        rules={[
                                            {
                                                pattern: /^[0-9\b]+$/,
                                                message: 'هذا الحقل يجب أن يحتوي على ارقام انجليزي فقط',
                                            },
                                            {
                                                required: true,
                                                message: 'هذا الحقل مطلوب.',

                                            },
                                        ]}
                                    // validateStatus={apiErrors?.errors?.mobile && 'error'}
                                    // help={t(apiErrors?.errors?.mobile)}
                                    >
                                        <Input />
                                    </Form.Item>
                                </InputS1>
                            </div>
                        </Col>

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

                                            },
                                        ]}
                                    // validateStatus={apiErrors?.errors?.email && 'error'}
                                    // help={t(apiErrors?.errors?.email)}
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
                                    // validateStatus={apiErrors?.errors?.password && 'error'}
                                    // help={t(apiErrors?.errors?.password)}
                                    >
                                        <Input.Password />

                                    </Form.Item>
                                </InputS1>
                            </div>
                        </Col>

                        <Col xs={24}  >
                            <Form.Item

                                valuePropName="checked"
                                rules={[
                                    {
                                        validator: (_, value) =>
                                            value ? Promise.resolve() : Promise.reject(new Error('يجب ان تقبل الشروط والأحكام.')),
                                    },
                                ]}
                                name="TermsAndConditions"

                            >
                                <Checkbox onChange={TermsAndConditions}>أقبل الشروط والأحكام.</Checkbox>
                            </Form.Item>
                        </Col>


                        <Col xs={24} md={12} lg={24} >
                            <div className="ButtonsS1_ flexCenter">
                                <ButtonsS1 loading={loading} type={'submit'} text={'تسجيل حساب جديد'} />
                            </div>
                        </Col>
                    </Row>
                </Form>
            </section>
        </>


    )
}
