import { Col, DatePicker, Form, Input, Row, Tabs } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddDocuments } from "../../../store/slices/documents/addDocumentsSlice";
import { addIdentityThunk } from '@store/slices/identity/identitySlices';

import ButtonsS1 from "../../tools/buttons/buttonsS1";
import InputS1 from '../../tools/inputs/inputS1'

export default function HeadSection() {

    console.log('testttttt')
    const { TabPane } = Tabs;
    const dateFormat = 'YYYY/MM/DD';
    const [tabValue, setTabValue] = useState(1)
    const [userLogin, setUserLogin] = useState(true)

    const { apiErrors } = useSelector(({ identity }) => identity)
    const { checkUser } = useSelector(({ auth }) => auth);

    const router = useRouter()
    const changeTabs = (e) => {
        setTabValue(e)
    }

    const dispatch = useDispatch()

    const setStart_at = (_, dateString) => {
        dispatch(setAddDocuments({ item: 'start_at', value: dateString }))
    }

    const onFinish = (values) => {



        dispatch(addIdentityThunk({ 'serial': values.serial })).unwrap().then((res) => {
            dispatch(setAddDocuments({ item: 'identity_id', value: res?.data?.identity?.id }))

            tabValue === 1 ?
                router.push('/dashboard/anti-third-party-insurance?step=2')
                :
                router.push('/dashboard/comprehensive-vehicle-insurance?step=2')
        })

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);

    };
    useEffect(() => {
        checkUser ? setUserLogin(true) : setUserLogin(false)
    }, [])


    return (
        <>
            <section className="headSection headSectionsWaveS2">
                <div className="container_">

                    <header className="headSections">
                        <h2>اشتر تأمين ضد الغير/شامل في دقائق</h2>
                        <p>
                            تستطيع اختيار نوع التأمين ليظهر لك اقتراحات شركات التأمين التي يقدمها مستر أمني.
                        </p>
                    </header>


                    <div className="content">

                        <Tabs defaultActiveKey="1" onChange={changeTabs} type="card" >
                            <TabPane tab="تأمين ضد الغير" key="1">

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
                                                            name="serial"
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
                                                            validateStatus={apiErrors?.errors?.serial && 'error'}
                                                            help={apiErrors?.errors?.serial}
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
                                                            <DatePicker onChange={setStart_at} placeholder={''} format={dateFormat} />

                                                        </Form.Item>
                                                    </InputS1>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12} lg={24} >
                                                <div className="ButtonsS1_ flexCenter">

                                                    <ButtonsS1 disabled={!userLogin} type={'submit'} text={'اشتر الآن'} />
                                                </div>
                                                {
                                                    checkUser && <div className="msg">يجب تسجيل الدخول اولاً</div>
                                                }
                                            </Col>


                                        </Row>
                                    </Form>
                                </div>
                            </TabPane>
                            <TabPane tab="تأمين شامل" key="2">

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
                                                            name="serial"
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

                                                            validateStatus={apiErrors?.errors?.serial && 'error'}
                                                            help={apiErrors?.errors?.serial}
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
                                                            <DatePicker onChange={setStart_at} placeholder={''} format={dateFormat} />

                                                        </Form.Item>
                                                    </InputS1>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={12} lg={24} >
                                                <div className="ButtonsS1_ flexCenter">
                                                    <ButtonsS1 disabled={!checkUser} type={'submit'} text={'اشتر الآن'} />
                                                </div>

                                                {
                                                    checkUser && <div className="msg">يجب تسجيل الدخول اولاً</div>
                                                }
                                            </Col>


                                        </Row>
                                    </Form>
                                </div>

                            </TabPane>

                        </Tabs>
                    </div>

                </div>
            </section>
        </>


    )
}
