import style from './styles/common-questions.module.scss'
import StillHaveQuestions from '../tools/sections/stillHaveQuestions'
import Image from 'next/image';
import { Collapse } from 'antd';
import { useState } from 'react';
import { IoAdd } from 'react-icons/io5'
const { Panel } = Collapse;
import CommonQuestions from '../tools/sections/commonQuestions_Section'
export default function ConnectUs() {



    const [expandIconPosition, setExpandIconPosition] = useState('start');


    const onChange = (key) => {
        console.log(key);
    };

    const genExtra = () => (
        <IoAdd
            onClick={(event) => {
                // If you don't want click extra trigger collapse, you can prevent this:
                onChange()
            }}
        />
    );

    return (
        <section className={style.ConnectUsPage}>
            <div className='container_ CommonQuestions'>
                <div className='page_ pageS1'>


                    <header>
                        <h1>الأسئلة الشائعة</h1>
                        <p>أمامك بعض الأسئلة الشائعة .. تستطيع أن تتصفحها واذا عندك سؤال آخر تواصل معنا.</p>
                    </header>

                    <div className='content'>
                        <div className='bg'></div>
                        <div className='form'>
                            <Collapse
                                onChange={onChange}
                                bordered={false}
                                expandIconPosition={expandIconPosition}
                                showArrow={false}
                            >
                                <Panel header="تسجيل حساب في مستر أمني ؟" key="1" extra={genExtra()}>
                                    <div>{'تسجيل حساب في مستر أمني ؟'}</div>
                                </Panel>
                                <Panel header="هل يمكن شراء تأمين طبي للأفراد ؟" key="2" extra={genExtra()}>
                                    <div>{'هل يمكن شراء تأمين طبي للأفراد ؟'}</div>
                                </Panel>
                                <Panel header="كيف يمكنني شراء تأمين طبي لشركتي ؟" key="3" extra={genExtra()}>
                                    <div>{'كيف يمكنني شراء تأمين طبي لشركتي ؟'}</div>
                                </Panel>

                                <Panel header="هل يمكنني المقارنة بين المنافع والشبكات لوثائق التأمين؟" key="4" extra={genExtra()}>
                                    <div>{'هل يمكنني المقارنة بين المنافع والشبكات لوثائق التأمين؟'}</div>
                                </Panel>
                            </Collapse>
                        </div>
                    </div>

                </div>


            </div>
            <StillHaveQuestions />
        </section>

    )
}
