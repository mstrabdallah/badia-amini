import { Col, DatePicker, Form, Input, Radio, Row, Select } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import ButtonsS1 from "@components/tools/buttons/buttonsS1";
import InputS1 from '@components/tools/inputs/inputS1'
import { useDispatch, useSelector } from "react-redux";
import { getAllCarsByIdentity } from "../../../../../store/slices/identity/identitySlices";
import LoadingPageS1 from '../../../../tools/loading/loadingPageS1'
import { setAddDocuments, setCurrent } from "../../../../../store/slices/documents/addDocumentsSlice";
import { updataCarsThunk } from "../../../../../store/slices/cars/carsSlice";
import moment from 'moment';

const App = () => {
    const [form] = Form.useForm();
    const [value, setValue] = useState();
    const { formData } = useSelector(({ addDocuments }) => addDocuments)
    const { allCarsByIdentity, allCarsByIdentityLoading } = useSelector(({ identity }) => identity)

    const [currentCar, setCurrentCar] = useState([])

    const dispatch = useDispatch()
    const onChange = (e) => {

        let dataCar = allCarsByIdentity.filter(res => res.id === e.target.value)[0];
        setCurrentCar(dataCar)
        dispatch(setAddDocuments({ item: 'car_id', value: e.target.value }))
        dispatch(setAddDocuments({ item: 'currentCar', value: dataCar }))
        setValue(e.target.value);

        form.setFieldsValue({
            ["purpose_vehicle_use"]: dataCar?.purpose_vehicle_use,
            ["serial"]: dataCar?.serial,
        });
    };

    const dateFormat = 'YYYY-MM-DD';


    const setpurpose_vehicle_use = (e) => {
        dispatch(updataCarsThunk({ 'id': currentCar.id, 'purpose_vehicle_use': e }))
    }

    const setStart_at = (_, dateString) => {
        dispatch(setAddDocuments({ item: 'start_at', value: dateString }))
    }
    //


    useEffect(() => {
        dispatch(getAllCarsByIdentity(formData.identity_id))
        window.scrollTo({ top: 0, behavior: 'smooth' });

    }, [])


    return (
        <>
            <div className="stepHeader flex__">
                <div className="title_">اختيار المركبه</div>
            </div>

            <div className="stepContents">
                {
                    allCarsByIdentityLoading ?
                        <LoadingPageS1 />
                        :

                        <Radio.Group onChange={onChange} value={value}>

                            <Row>
                                {
                                    allCarsByIdentity.map((res, i) =>
                                        <Col xs={12} md={12} key={i}>
                                            <div className="ownerOfTheDocument VehicleInformation">
                                                <Radio value={res.id}>
                                                    <div className="title_ flex__">
                                                        <div className="image_">
                                                            <Image src="/icons/carIcon.svg" width={105} height={94} />
                                                        </div>
                                                        <span className="title_Content">
                                                            <h3>{res.brand}</h3>

                                                            <p><strong>رقم اللوحه :</strong><span>{res.plate_number}</span></p>
                                                            <p><strong>الرقم التسلسلي :</strong><span>{res.serial}</span></p>
                                                            <p><strong>الموديل :</strong><span>{res.model}</span></p>
                                                        </span>
                                                    </div>
                                                </Radio>
                                            </div>
                                        </Col>
                                    )
                                }


                            </Row>
                        </Radio.Group>
                }
            </div >


            <div className="stepContents stepContents2">

                <Form
                    name="basic"
                    disabled={currentCar?.length === 0}
                    layout="vertical"
                    form={form}

                >
                    <Row gutter={25}>
                        <Col xs={24} md={12} lg={6}>
                            <div className="input">
                                <InputS1>
                                    <Form.Item
                                        label="نوع وثيقة المركبة"
                                        name="name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'هذا الحقل مطلوب.',
                                            },
                                        ]}
                                    >
                                        <Select defaultValue="private">
                                            <Option value="private">البطاقه الجمركيه</Option>
                                        </Select>
                                    </Form.Item>
                                </InputS1>
                            </div>
                        </Col>

                        <Col xs={24} md={12} lg={6}>
                            <div className="input">
                                <InputS1>
                                    <Form.Item
                                        label="الرقم التسلسلي"
                                        name="serial"
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
                        </Col>
                        <Col xs={24} md={12} lg={6}>
                            <div className="input">
                                <InputS1>
                                    <Form.Item
                                        label="الغرض من الإستخدام"
                                        name="purpose_vehicle_use"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'هذا الحقل مطلوب.',
                                            },
                                        ]}


                                    >
                                        <Select defaultValue="private" onChange={setpurpose_vehicle_use}>
                                            <Option value="private">خاص</Option>
                                            <Option value="commercial">تجاري</Option>
                                            <Option value="car_rental">تأجير سيارة</Option>

                                            <Option value="uber_careem">أوبر كريم </Option>
                                            <Option value="goods_transport">نقل البضائع</Option>
                                            <Option value="petroleum_derivative_transport">نقل المشتقات البترولية</Option>

                                        </Select>
                                    </Form.Item>
                                </InputS1>
                            </div>
                        </Col>
                        <Col xs={24} md={12} lg={6} >
                            <div className="input">
                                <InputS1>
                                    <Form.Item
                                        label="متى تريد أن يبدأ تاريخ سريان الوثيقة؟"
                                        name="time"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'هذا الحقل مطلوب.',
                                            },
                                        ]}
                                    >
                                        <DatePicker
                                            defaultValue={formData?.start_at && moment(formData?.start_at, dateFormat)}
                                            format={dateFormat}
                                            placeholder={''}
                                            onChange={setStart_at}
                                        />


                                    </Form.Item>
                                </InputS1>
                            </div>
                        </Col>



                    </Row>
                </Form>

            </div>

            <div className="steps-action">
                <div className="stepsActionNext">

                    <div onClick={() => dispatch(setCurrent(2))} >
                        <ButtonsS1 disabled={(formData?.start_at && value) ? false : true} text={'التالى'} type="primary" />
                    </div>
                </div>


            </div>
        </>
    );
};

export default App;
