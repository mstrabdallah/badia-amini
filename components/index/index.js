import style from './styles/index.module.scss'
import Head_Section from './sections/head_Section'
import TypeOfInsurance_Section from './sections/typeOfInsurance_Section'

import InsuranceChoose_Section from '../tools/sections/insuranceChoose_Section'
import StepsToBuy_Sections from '../tools/sections/stepsToBuy_Sections'
import WhyBuyFromOmni from '../tools/sections/WhyBuyFromOmni_Section'
import CustomerReviews from '../tools/sections/CustomerReviews_Section'
import CommonQuestions from '../tools/sections/commonQuestions_Section'
import StillHaveQuestions from '../tools/sections/stillHaveQuestions'
export default function Home() {

    const StepsToBuyData = {
        title: 'خطوات شراء تأمين لدينا',
        des: 'لشراء تأمين كل ما عليك فعله هو اتباع الخطوات التالية.',
        sub: 'شراء تأمين الآن'
    }

    return (
        <>
            <section className={style.indexPage}>

                <div className='page_ indexPage_'>

                    <Head_Section />
                    <TypeOfInsurance_Section />
                    <InsuranceChoose_Section />
                    <StepsToBuy_Sections data={StepsToBuyData} />
                    <WhyBuyFromOmni title={'ليه أشتري من أمني ؟'} />
                    <CustomerReviews title={'آراء العملاء <br />في أنظمة التأمين لدينا'} des={'نستعرض لك بعض آراء العملاء والمستخدمين<br /> في أنظمة التأمين المتاحة لدينا.'} />
                    <CommonQuestions />
                    <StillHaveQuestions />
                </div>
            </section>
        </>


    )
}
