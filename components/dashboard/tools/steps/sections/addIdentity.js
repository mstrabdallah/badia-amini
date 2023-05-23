
import React, { useState } from 'react';
import ButtonsS1 from '@components/tools/buttons/buttonsS1';
import InputS1 from '@components/tools/inputs/inputS1'
import { Col, Form, Input, Row, Modal, Button } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import MsgApi from '@components/tools/msg/msgApi';
import useTranslation from 'next-translate/useTranslation';
import { addIdentityThunk } from '@store/slices/identity/identitySlices';
import { getIdentity } from '@store/slices/identity/identitySlices';
export default function AddDocuments() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const { loadingAddIdentity, apiErrors } = useSelector(({ identity }) => identity)

    const [form] = Form.useForm();

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


    const onFinish = (values) => {

        dispatch(addIdentityThunk(values)).unwrap().then((res) => {
            form.resetFields();
            handleCancel()
            dispatch(getIdentity())

        })

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <>
            <section>


                <div onClick={showModal}>
                    <Button >اضافة هوية جديده</Button>
                </div>

                <Modal
                    title=""
                    className='loginPageModel modelS1'
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={null}
                    header={null}
                >
                    <Form
                        name="basic"
                        layout="vertical"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        form={form}
                    >


                        <Row gutter={10}>
                            <Col xs={24}>
                                <div className="input">
                                    <InputS1>
                                        <Form.Item
                                            label="رقم هوية مالك الوثيقه"
                                            name="serial"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'هذا الحقل مطلوب.',
                                                }
                                            ]}
                                            validateStatus={apiErrors?.errors?.serial && 'error'}
                                            help={t(apiErrors?.errors?.serial)}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </InputS1>
                                </div>
                            </Col>

                            <Col xs={24} md={12} lg={24} >
                                <div className="ButtonsS1_ flexCenter">
                                    <ButtonsS1 loading={loadingAddIdentity} type={'submit'} text={'اضافة'} />
                                </div>
                            </Col>

                            <Col xs={24} md={12} lg={24} >
                                <MsgApi apiErrors={apiErrors} />
                            </Col>

                        </Row>
                    </Form>
                </Modal>
            </section>
        </>


    )
}
