import style from './styles/general-insurance.module.scss'
import Head_Section from './sections/head_Section'
import InsuranceCoverage from './sections/insuranceCoverage_Section'
import CommonQuestions from './sections/commonQuestions_Section'
//
import InsuranceChoose_Section from '../tools/sections/insuranceChoose_Section'
import StepsToBuy_Sections from '../tools/sections/stepsToBuy_Sections'
import WhyBuyFromOmni from '../tools/sections/WhyBuyFromOmni_Section'
import CustomerReviews from '../tools/sections/CustomerReviews_Section'
import StillHaveQuestions from '../tools/sections/stillHaveQuestions'
export default function MedicalInsurance() {

    const StepsToBuyData = {
        title: 'خطوات شراء تأمين عام',
        des: 'لشراء تأمين لشركتك كل ما عليك فعله هو اتباع الخطوات التالية.',
        sub: 'شراء تأمين عام لشركتك الآن'
    }
    return (
        <>
            <section className={style.MedicalInsurance}>

                <div className='page_'>
                    <Head_Section />
                    <InsuranceChoose_Section />
                    <StepsToBuy_Sections data={StepsToBuyData} />
                    <WhyBuyFromOmni title={'ليه أشتري تأمين عام من أمني ؟'} />
                    <InsuranceCoverage />
                    <CommonQuestions />
                    <CustomerReviews title={'آراء العملاء<br /> في أنظمة التأمين العام لدينا'} des={'نستعرض لك بعض آراء العملاء والمستخدمين<br /> في أنظمة التأمين العام المتاحة لدينا.'} />
                    <StillHaveQuestions />
                </div>
            </section>
        </>


    )
}
