import style from "../tools/steps/style/steps.module.scss";
import HeaderPagesS1 from '../tools/headers/HeaderPagesS1'
import ButtonsS1 from '../../tools/buttons/buttonsS1'
import { Steps } from 'antd';
import React, { useEffect, useState } from 'react';
import Step1 from '../tools/steps/steps/step1'
import Step2 from '../tools/steps/steps/step2'
import Step3 from '../tools/steps/steps/step3'
import Step4 from '../tools/steps/steps/step4'
import { useDispatch, useSelector } from "react-redux";
import {  setCurrent, setType } from "../../../store/slices/documents/addDocumentsSlice";
import { useRouter } from "next/router";
const { Step } = Steps;
const steps = [
  {
    title: 'معلومات مالك الوثيقه',
    sub: 'التالى'
  },
  {

    title: 'معلومات المركبه',
    sub: 'التالى'
  },
  {
    title: 'قائمة الاسعار',
    sub: 'اذهب للدفع'
  },
  {
    title: 'التفاصيل والدفع',
    sub: 'ادفع الآن'
  },
];


const AntiThirdPartyInsurance = () => {

  const { current } = useSelector(({ addDocuments }) => addDocuments)
  const router = useRouter()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCurrent(0))
  }, [router.asPath])


 
  useEffect(() => {
    dispatch(setType('third_party'))
  })
  return (
    <div className="container_">
      <div className={style.StepsStyles}>

        <HeaderPagesS1 title={'شراء وثيقة تأمين جديده ضد الغير'} />


        <div className="stepContent">
          <Steps current={current}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">

            {
              current === 0 ?
                <Step1 />
                :
                current === 1 ?
                  <Step2 />
                  :
                  current === 2 ?
                    <Step3 />
                    :
                    <Step4 />
            }


          </div>


        </div>
      </div>
    </div>
  );
};

export default AntiThirdPartyInsurance;
