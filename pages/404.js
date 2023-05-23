import { Button, Result } from "antd"
import Head from "next/head"
import Link from "next/link"
import ButtonsS1 from "../components/tools/buttons/buttonsS1"


export default function Custom404() {

    return <>
        <Head>
            <title>الصفحة المطلوبة غير موجوده</title>
        </Head>
        <div className="page_">
            <Result
                status="404"
                title="الصفحة المطلوبة غير موجوده"
                subTitle="تأكد من العنوان المطلوب, او اذهب الى الصفحة الرئيسية"
                extra={<div className="flexCenter"><Link href={"/"}><a><ButtonsS1 text={'العودة للصفحة الرئيسية'}/></a></Link></div>}
            />
        </div>
      
    </>
}