import { Checkbox, Col, DatePicker, Form, Input, InputNumber, Radio, Row, Select, Table } from "antd";
import { useEffect, useState } from "react";
import InputS1 from '@components/tools/inputs/inputS1'
import { setCurrent } from "../../../../../store/slices/documents/addDocumentsSlice";
import ButtonsS1 from "../../../../tools/buttons/buttonsS1";
import { useDispatch, useSelector } from "react-redux";
import { updataCarsThunk } from "../../../../../store/slices/cars/carsSlice";

const App = () => {
    const [value, setValue] = useState();
    const [form] = Form.useForm();

    const { formData } = useSelector(({ addDocuments }) => addDocuments)
    const car = formData.currentCar;
    console.log(car)
    const onChange = (e) => {
        setValue(e.target.value);
    };

    const dispatch = useDispatch()

    const onFinish = (values) => {
        dispatch(updataCarsThunk({ id: car.id, 'estimated_cost': values.estimated_cost, 'repair_place': values.repair_place }))
        dispatch(setCurrent(3))

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    const columns = [
        {
            title: 'ماركة المركبة',
            dataIndex: 'brand',
            key: 'brand',
            render: (brand) => <p>{brand}</p>,
        },
        // {
        //     title: 'سنة',
        //     dataIndex: 'age',
        //     key: 'age',
        //     responsive: ['md'],
        // },
        {
            title: 'موديل المركبة',
            dataIndex: 'model',
            key: 'model',

            render: (model) => <p>{model}</p>,
        },
    ];
    const data2 = [
        {
            key: '1',
            brand: car.brand,
            model: car.model,
        },
    ];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
    return (
        <>
            <div className="fullInsurance">
                <Form
                    name="basic"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    form={form}
                >



                    <div className="stepContents mt5 fullInsuranceSec1">
                        <Row gutter={70}>


                            <Col xs={24} >
                                <div className="input">
                                    <InputS1>
                                        <Form.Item
                                            className="mt1"
                                            label="بحاجة لإصلاح السيارة في"
                                            name="repair_place"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'هذا الحقل مطلوب.',

                                                },
                                            ]}
                                        >
                                            <Radio.Group onChange={onChange} value={value}>


                                                <Radio value={'agency'}>
                                                    <div className="title_ flex__">
                                                        الوكالة
                                                    </div>
                                                </Radio>

                                                <Radio value={'workshop'}>
                                                    <div className="title_ flex__">
                                                        الورشات المعتمدة
                                                    </div>
                                                </Radio>

                                            </Radio.Group>
                                        </Form.Item>
                                    </InputS1>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="stepHeader flex__">
                        <div className="title_">قيمة المركبة التقديرية</div>
                    </div>

                    <Row gutter={70}>

                        <Col xs={24} md={12}>
                            <div className="stepContents ">
                                <Table columns={columns} dataSource={data2} pagination={false} />
                            </div >
                        </Col>

                        <Col xs={24} md={12}>
                            <div className="stepContents vehiclevalue">
                                <InputS1>
                                    <Form.Item
                                        className="mt1"
                                        label="ادخل قيمة المركبة التقديرية (ر.س)"
                                        name="estimated_cost"
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
                                    >
                                        <Input />
                                    </Form.Item>
                                </InputS1>
                            </div >
                        </Col>
                    </Row>


                    <div className="steps-action">
                        <div className="stepsActionNext">

                            <div  >
                                <ButtonsS1
                                    // disabled={}
                                    text={'التالى'} type="primary" />
                            </div>
                        </div>


                    </div>

                </Form>
            </div >
        </>
    );
};

export default App;
