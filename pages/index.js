import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSuspenseS1 from "@components/tools/loading/loadingSuspenseS1";

const Index = dynamic(() => import("@components/index/index"), {
  suspense: true,
  ssr: true,
});


function Home() {

  return (
    <>
      <Head>
        <title>مستر امني</title>
        <meta key="description" name="description" content=" مستر أمني الموقع الأول لمقارنة أسعار التأمين ... 20+ شركة تأمين معتمدة - خيارات متعددة – وثيقة تأمين فورية" />
        <meta key="keywords" name="keywords" content="امني, مستر امني,تأمين,تأمينات, التأمين, سيارة, هوية, باديا" />
      </Head>


      <Suspense fallback={<LoadingSuspenseS1 />}>
        <Index />
      </Suspense>

    </>
  );
}




export default Home;