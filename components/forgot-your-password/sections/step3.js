import { Form, Input, } from 'antd'
import InputS1 from '../../tools/inputs/inputS1'
import ButtonsS1 from '../../tools/buttons/buttonsS1';
import Image from 'next/image';
import Link from 'next/link';
export default function ForgotYourPassword() {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <header>
                <h1>تم تعيين كلمة المرور الجديدة بنجاح</h1>
                <p>تستطيع الرجوع إلى الصفحة الرئيسية لتسجيل دخولك من جديد.</p>
            </header>



            <div className='content'>
                <div className='bg'></div>
                <div className='form'>
                    <Form
                        name="basic"
                        layout="vertical"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >

                        <br /><br />

                        <Image src={'/images/forgot-your-password.png'} width={626} height={440} />

                        <Link href='/'>
                            <div className="ButtonsS1_ flexCenter">
                                <ButtonsS1 text={'العودة إلى الصفحة الرئيسية'} />
                            </div>
                        </Link>
                        <br /><br />
                    </Form>
                </div>
            </div>

        </>


    )
}
