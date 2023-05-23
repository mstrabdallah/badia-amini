import { Col, Row } from "antd";
import Image from "next/image";

export default function WhyBuyFromOmni({ title }) {

    const data = [{
        icon: { url: '/images/WhyBuyFromOmni1.png', width: 53, height: 45 },
        title: 'تأمينك في دقيقتين',
        des: 'لأن وقتك ثمين علينا، مقارنتك لعروض شركات التأمين وإصدار الوثيقة صارت بضغطة زر',

    },
    {
        icon: { url: '/images/WhyBuyFromOmni2.png', width: 48, height: 48 },
        title: 'أسعار أقل!',
        des: 'عندنا فريق يراقب كل صغيرة وكبيرة في السوق ويضمن أن سعرك الأقل والمناسب لك وفق حاجتك لها',

    },
    {
        icon: { url: '/images/WhyBuyFromOmni3.png', width: 56, height: 44 },
        title: 'واضح وسريع',
        des: 'تبي رؤية واضحة لخيارات التأمين؟ وكيف تميز بين منافع التأمين المتعددة! كل شي عندنا واضح بدون لف ودوران',

    },
    {
        icon: { url: '/images/WhyBuyFromOmni4.png', width: 48, height: 56 },

        title: 'دعم فني 24 ساعة',
        des: 'نظام الدعم الفني في ملفك الشخصي . يوضح لك حالة التذكرة من البداية حتى النهاية لأن من حقك تعرف!ومن حقنا أن تكون راضي علينا',

    },
    {
        icon: { url: '/images/WhyBuyFromOmni5.png', width: 55, height: 51 },

        title: 'سعودية 100٪',
        des: 'لأننا سعوديين ومصحصحين! وبي كير شركة مملوكة لسعوديين طموحين هدفهم رضاك قبل كل شيء',

    },
    {
        icon: { url: '/images/WhyBuyFromOmni6.png', width: 47, height: 48 },
        title: 'خيارات الدفع',
        des: 'نوفر لك كل طرق الدفع وأي نظام دفع تحتاجه بتلقاه قدامك وبين يديك',

    },]
    return (
        <>
            <section className="WhyBuyFromOmni headSectionsWaveS2">
                <div className="container_">
                    <header className="headSections">
                        <h2>{title}</h2>
                        <p>مالك في الطويلة ..عشان ماتتعب نفسك وتدور أفضل و “أوضح” عرض بدون ماتحتار.</p>
                    </header>


                    <div className="content">
                        <Row gutter={40}>
                            {
                                data.map((res, i) =>
                                    <Col key={i} xs={24} md={12} lg={8} className="flexCenter">
                                        <div className="WhyBuyFromOmniItem">
                                            <div className="Image_">
                                                <Image src={res.icon.url} width={res.icon.width} height={res.icon.height} />
                                            </div>
                                            <h3>{res.title}</h3>
                                            <p>{res.des}</p>
                                        </div>
                                    </Col>
                                )
                            }




                        </Row>
                    </div>

                </div>
            </section>
        </>


    )
}
