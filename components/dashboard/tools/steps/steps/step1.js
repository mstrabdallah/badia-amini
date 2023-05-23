import { Button, Col, Radio, Row } from "antd";
import { useEffect, useState } from "react";
import { AiOutlineUser } from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";
import { getIdentity } from "@store/slices/identity/identitySlices";
import LoadingPageS1 from '@components/tools/loading/loadingPageS1'
import AddIdentity from '../sections/addIdentity'
import { setAddDocuments } from "@store/slices/documents/addDocumentsSlice";
import { setCurrent, setIdentitiesCurrent } from "../../../../../store/slices/documents/addDocumentsSlice";
import NoDataFound from "../../../../tools/noDataFound/noDataFoundS1";
import ButtonsS1 from "../../../../tools/buttons/buttonsS1";
import { useRouter } from "next/router";
const App = () => {


    const { identities, loading } = useSelector(({ identity }) => identity)
    const dispatch = useDispatch()
    const router = useRouter()
    const { step } = router.query;


    const [stepCheck, setStepCheck] = useState(false)
    const onChange = (e) => {
        setStepCheck(true)


        dispatch(setAddDocuments({ item: 'identity_id', value: e.target.value }))
        let data = identities.filter(res => res.id === e.target.value);
        dispatch(setIdentitiesCurrent(data[0]))
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch(getIdentity())
    }, [])


    useEffect(() => {
        if (step) {
            dispatch(setCurrent(1))
        }
    })
    return (
        <>
            <div className="stepHeader flex__">
                <div className="title_">هوية مالك الوثيقه</div>
                <AddIdentity />
            </div>

            {
                loading ?
                    <LoadingPageS1 />
                    :

                    <div className="stepContents">
                        <Radio.Group onChange={onChange} >

                            {identities?.length > 0 ?
                                <Row gutter={30}>
                                    {
                                        identities.map((res, i) =>
                                            <Col xs={24} md={12} key={i}>
                                                <div className="ownerOfTheDocument">
                                                    <Radio value={res.id}>
                                                        <div className="title_ flex__">
                                                            <div className="icon"><AiOutlineUser /></div>
                                                            <span>
                                                                <h3>{res.name}</h3>
                                                                <p>{res.serial}</p>
                                                            </span>
                                                        </div>
                                                    </Radio>
                                                </div>
                                            </Col>
                                        )
                                    }
                                </Row>

                                :
                                <NoDataFound text={'لا يوجد اي هوية, يجب اضافة هوية جديده'} />
                            }
                        </Radio.Group>
                    </div>
            }

            <div className="steps-action">
                <div className="stepsActionNext">
                    <div onClick={() => dispatch(setCurrent(1))} >
                        <ButtonsS1 disabled={!stepCheck} text={'التالى'} type="primary" />
                    </div>
                </div>


            </div>
        </>
    );
};

export default App;
