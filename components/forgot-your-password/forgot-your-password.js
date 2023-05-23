import { Form, Input, } from 'antd'
import style from './styles/forgot-your-password.module.scss'
import InputS1 from '../tools/inputs/inputS1'
import ButtonsS1 from '../tools/buttons/buttonsS1';
import StillHaveQuestions from '../tools/sections/stillHaveQuestions'
import Image from 'next/image';
import { useState } from 'react';
import Step1 from './sections/step1'
import Step2 from './sections/step2'
import Step3 from './sections/step3'
export default function ForgotYourPassword() {

    const [step, setStep] = useState(1)
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    const Steps = (e) => {
        setStep(e)
    }
    return (
        <section className={style.ForgotYourPasswordPage}>
            <div className='container_ pageS1'>
                <div onClick={() => setStep(step + 1)}>+</div>
                <div className='page_'>

                    {
                        step === 1 ?
                            <Step1 />
                            :
                            step === 2 ?
                                <Step2 />
                                :
                                step === 3 &&
                                <Step3 />
                    }


                </div>


            </div>
            <StillHaveQuestions />
        </section>

    )
}
