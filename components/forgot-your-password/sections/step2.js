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
                <h1>اعادة تعيين كلمة المرور</h1>
                <p>كلمة المرور الجديدة لابد أن تكون مختلفة عن القديمة.</p>
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
                                    label="كلمة المرور الجديدة"
                                    name="Password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'هذا الحقل مطلوب.',
                                        },
                                    ]}
                                >
                                    <Input.Password />

                                </Form.Item>
                            </InputS1>
                        </div>

                        <div className="input">
                            <InputS1>
                                <Form.Item
                                    label="تأكيد كلمة المرور الجديدة"
                                    name="Password2"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'هذا الحقل مطلوب.',
                                        },
                                    ]}
                                >
                                    <Input.Password />

                                </Form.Item>
                            </InputS1>
                        </div>



                        <div className="ButtonsS1_ flexCenter">
                            <ButtonsS1 text={'تعيين كلمة مرور جديدة'} />
                        </div>

                        <br /><br />
                    </Form>
                </div>
            </div>

        </>


    )
}
