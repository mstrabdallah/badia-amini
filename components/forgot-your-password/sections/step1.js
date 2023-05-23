import { Form, Input, } from 'antd'
import InputS1 from '../../tools/inputs/inputS1'
import ButtonsS1 from '../../tools/buttons/buttonsS1';
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
                <h1>هل نسيت كلمة مرورك ؟</h1>
                <p>لا تقلق .. فقط اكتب البريد الالكتروني الخاص بك لاعادة تعيين كلمة المرور الخاصة بك.</p>
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
                        <div className="input">
                            <InputS1>
                                <Form.Item
                                    label="البريد الالكتروني"
                                    name="email"
                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'يجب ان يكون بصيغة بريد الكتروني',
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
                        </div>



                        <div className="ButtonsS1_ flexCenter">
                            <ButtonsS1 text={'اعادة تعيين كلمة المرور'} />
                        </div>

                        <br /><br />
                    </Form>
                </div>
            </div>

        </>


    )
}
