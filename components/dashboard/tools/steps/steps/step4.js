import { Checkbox, Col, DatePicker, Form, Input, message, Radio, Row, Select } from "antd";
import Image from "next/image";
import ButtonsS1 from "@components/tools/buttons/buttonsS1";
import InputS1 from '@components/tools/inputs/inputS1'
import { useDispatch, useSelector } from "react-redux";
import { addDocumentsThunk, setAddDocuments } from "../../../../../store/slices/documents/addDocumentsSlice";
import { updateIdentityThunk } from "../../../../../store/slices/identity/identitySlices";
import { useRouter } from "next/router";
import { useEffect } from "react";

const App = () => {
    const { identitiesCurrent, formData, apiErrors, loading } = useSelector(({ addDocuments }) => addDocuments)
    const { carInsuranceCompanies } = useSelector(({ cars }) => cars)
    const { updateIdentity_apiErrors } = useSelector(({ identity }) => identity)

    const router = useRouter()
    const priceData = carInsuranceCompanies.find(res => res.types[0].id === formData?.car_insurance_company_type_id)
    const price = parseFloat(priceData?.types[0]?.price);

    const dispatch = useDispatch()

    const onChangePay = (e) => {
        dispatch(setAddDocuments({ item: 'payment_method_id', value: e.target.value }))
    }

    const onFinish = (values) => {
        console.log('onFinish', values)
        values.identity_id = formData.identity_id
        dispatch(updateIdentityThunk(values)).unwrap().then((res) => {

            dispatch(addDocumentsThunk(formData)).unwrap().then((res) => {
                message.success('تم إضافة الوثيقة');
                router.push('/dashboard/purchaseddocs')
            }).catch((res) => {
                message.error("البيانات المدخله غير صحيحه, يرجي مراجعة هذة البيانات !!");
            })

        }).catch((res) => {
            message.error("البيانات المدخله غير صحيحه, يرجي مراجعة هذة البيانات !");
        })

    };

    const onFinishFailed = (errorInfo) => {
        message.error("هناك بعض الحقول المطلوبة فارغه, يرجي مراجعة البيانات");
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
    const data = [{}, {}, {}, {}]
    return (
        <>
            <div className="priceList">
                <Form
                    name="basic"

                    layout="vertical"
                    initialValues={{
                        'email': identitiesCurrent.email,
                        'mobile': identitiesCurrent.mobile
                    }}

                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >


                    <div className="stepContents priceList">


                        <Row>

                            <Col xs={24} md={12}>
                                <div className="flex_ priceList_item">
                                    <strong>تاريخ بدء الوثيقة</strong>
                                    <span>{formData.start_at}</span>
                                </div>
                            </Col>

                            <Col xs={24} md={12}>
                                <div className="flex_ priceList_item">
                                    <strong>الرقم التسلسلي</strong>
                                    <span>{identitiesCurrent.serial}</span>
                                </div>
                            </Col>

                            {/* <Col xs={24} md={12}>
    <div className="flex_ priceList_item">
        <strong>مالك الوثيقة</strong>
        <span></span>
    </div>
</Col>
*/}


                            {/* <Col xs={24} md={12}>
    <div className="flex_ priceList_item">
        <strong>ماركة المركبة</strong>
        <span></span>
    </div>
</Col> */}

                            <Col xs={24} md={12}>
                                <div className="flex_ priceList_item">
                                    <strong>الاسم</strong>
                                    <span>{identitiesCurrent.name}</span>
                                </div>
                            </Col>

                            {/* <Col xs={24} md={12}>
    <div className="flex_ priceList_item">
        <strong>سنة الصنع</strong>
        <span></span>
    </div>
</Col> */}

                            <Col xs={24} md={12}>
                                <div className="flex_ priceList_item">
                                    <strong>عنوانك الوطني</strong>
                                    <span>{identitiesCurrent.work_location}</span>
                                </div>
                            </Col>


                            {/* <Col xs={24} md={12}>
    <div className="flex_ priceList_item">
        <strong>رقم اللوحة</strong>
        <span></span>
    </div>
</Col> */}


                        </Row>

                    </div>

                    <div className="stepContents mt3">

                        <Row gutter={25}>
                            <Col xs={24} md={12} lg={12}>
                                <div className="input">
                                    <InputS1>
                                        <Form.Item
                                            label="البريد الالكتروني لمالك الوثيقة"
                                            name="email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'هذا الحقل مطلوب.',

                                                },
                                            ]}
                                            validateStatus={updateIdentity_apiErrors?.errors?.email && 'error'}
                                            help={updateIdentity_apiErrors?.errors?.email}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </InputS1>
                                </div>
                            </Col>

                            <Col xs={24} md={12} lg={12}>
                                <div className="input">
                                    <InputS1>
                                        <Form.Item
                                            label="رقم جوال مالك الوثيقة"
                                            name="mobile"
                                            rules={[

                                                {
                                                    required: true,
                                                    message: 'هذا الحقل مطلوب.',

                                                },
                                            ]}
                                            validateStatus={updateIdentity_apiErrors?.errors?.mobile && 'error'}
                                            help={updateIdentity_apiErrors?.errors?.mobile}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </InputS1>
                                </div>
                            </Col>
                        </Row>

                    </div>

                    <div className="stepContents mt4">
                        <Form.Item
                            label="اختر طريقة الدفع"
                            name="payment_method_id"
                            rules={[
                                {
                                    required: true,
                                    message: 'هذا الحقل مطلوب.',
                                },
                            ]}
                            validateStatus={apiErrors?.errors?.payment_method_id && 'error'}
                            help={apiErrors?.errors?.payment_method_id}
                        >
                            <Radio.Group onChange={onChangePay} >
                                <div className="title_">اختر طريقة الدفع</div>
                                <div className="priceListPayItems flex_">
                                    {
                                        data.map((res, i) =>
                                            <div key={i} className="priceListPayItem">
                                                <Radio value={i + 1}>
                                                    <div className="title_ flex__">
                                                        <Image src={`/images/pay/image ${i + 1}.png`} width={60} height={40} />

                                                    </div>
                                                </Radio>
                                            </div>
                                        )
                                    }
                                </div>


                            </Radio.Group>
                        </Form.Item>
                    </div >

                    <div className="stepContents details mt3">
                        <h2>التفاصيل</h2>
                        <Row>

                            <Col xs={24} >
                                <div className="flex_ priceList_item">
                                    <strong>سعر الوثيقة</strong>
                                    <span>{price}.00</span>
                                </div>
                            </Col>


                            <Col xs={24} >
                                <div className="flex_ priceList_item">
                                    <strong>خصم عدم وجود مطالبات</strong>
                                    <span>0</span>
                                </div>
                            </Col>

                            <Col xs={24} >
                                <div className="flex_ priceList_item">
                                    <strong>قسط إشتراك التأمين</strong>
                                    <span>0</span>
                                </div>
                            </Col>

                            <Col xs={24} >
                                <div className="flex_ priceList_item">
                                    <strong>تحميل نتيجة حوادث</strong>
                                    <span>0</span>
                                </div>
                            </Col>
                        </Row>

                        <Row >

                            <Col xs={24} >
                                <div className="flex_ priceList_item">
                                    <strong>المجموع الجزئي</strong>
                                    <span>0</span>
                                </div>
                            </Col>


                            <Col xs={24} >
                                <div className="flex_ priceList_item">
                                    <strong>ضريبة القيمة المضافة (15.00%)</strong>
                                    <span>{price * .15}.00</span>
                                </div>
                            </Col>

                        </Row>


                        <Row>

                            <Col xs={24} >
                                <div className="flex_ priceList_item">
                                    <strong> المبلغ الإجمالي
                                    </strong>
                                    <span className="flex_"><div className="price">{(price * .15) + (price)}.00 ر.س</div> السعر شامل الضرائب و الرسوم</span>
                                </div>
                            </Col>

                        </Row>

                    </div>
                    <div className="TermsAndConditions">
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
                                <Checkbox>أقبل الشروط والأحكام.</Checkbox>
                            </Form.Item>
                        </Col>
                    </div>

                    <div className="steps-action">
                        <div className="stepsActionNext">
                            <div>
                                <ButtonsS1 loading={loading} text={'ادفع الآن'} type="submit" />
                            </div>
                        </div>


                    </div>

                </Form>
            </div>
        </>
    );
};

export default App;
