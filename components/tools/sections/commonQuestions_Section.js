import { Collapse, Select } from 'antd';
import React, { useState } from 'react';
import { IoAdd } from 'react-icons/io5'
const { Panel } = Collapse;
const { Option } = Select;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
export default function CommonQuestions() {


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
        <>
            <section className="CommonQuestions headSectionsWaveS2">
                <div className="container_">
                    <header className="headSections">
                        <h2>الأسئلة الشائعة</h2>
                        <p>أمامك بعض الأسئلة الشائعة .. تستطيع أن تتصفحها واذا عندك سؤال آخر تواصل معنا.</p>

                    </header>


                    <div className="content">

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
            </section>
        </>


    )
}
