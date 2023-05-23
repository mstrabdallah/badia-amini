import { Col, Radio, Row } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import { setAddDocuments, setCurrent } from "../../../../../store/slices/documents/addDocumentsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getCarInsuranceCompaniesThunk } from "../../../../../store/slices/cars/carsSlice";
import ButtonsS1 from "../../../../tools/buttons/buttonsS1";

const App = () => {

    const { carInsuranceCompanies } = useSelector(({ cars }) => cars)
    const [stepCheck, setStepCheck] = useState(false)

    const dispatch = useDispatch()

    const { identitiesCurrent, formData, type } = useSelector(({ addDocuments }) => addDocuments)

    const onChange = (e) => {
        dispatch(setAddDocuments({ item: 'car_insurance_company_type_id', value: e.target.value }))
        setStepCheck(true)

    };

    const getNextStep = () => {
        if (type === "third_party") return 3; else return 4
    }

    useEffect(() => {
        dispatch(getCarInsuranceCompaniesThunk())
        window.scrollTo({ top: 0, behavior: 'smooth' });

    }, [])
 

    return (
        <>
            <div className="priceList">


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
                <div className="stepHeader flex__">
                    <div className="title_">قائمة الاسعار</div>
                </div>

                <div className="stepContents">
                    <Radio.Group onChange={onChange} >

                        <Row>
                            {
                                carInsuranceCompanies.map((res, i) =>
                                    <Col xs={24} md={24} key={i}>
                                        <div className="ownerOfTheDocument VehicleInformation">
                                            <Radio value={res?.types[0]?.id}>
                                                <div className="title_ flex__">
                                                    <div className="image_">
                                                        <Image src="/icons/carIcon.svg" width={105} height={94} />
                                                    </div>
                                                    <span className="title_Content">
                                                        <h3>{res.name}</h3>

                                                        <p>
                                                            {res.description}
                                                        </p>
                                                    </span>
                                                    <div className="price">
                                                        <strong>{res?.types[0]?.price}</strong>
                                                        <span>ر.س</span>
                                                    </div>
                                                </div>
                                            </Radio>
                                        </div>
                                    </Col>
                                )
                            }


                        </Row>
                    </Radio.Group>
                </div >
            </div>

            <div className="steps-action">
                <div className="stepsActionNext">
                    <div onClick={() => dispatch(setCurrent(getNextStep()))} >
                        <ButtonsS1 disabled={!stepCheck} text={'التالى'} type="primary" />
                    </div>
                </div>


            </div>
        </>
    );
};

export default App;
