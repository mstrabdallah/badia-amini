import Head from "next/head";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSuspenseS1 from "@components/tools/loading/loadingSuspenseS1";

const AntiThirdPartyInsurance = dynamic(() => import("@components/dashboard/anti-third-party-insurance/anti-third-party-insurance"), {
  suspense: true,
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>وثيقة تامين ضد الغير - مستر امني</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>

      <Suspense fallback={<LoadingSuspenseS1 />}>
        <AntiThirdPartyInsurance />
      </Suspense>
    </div>
  );
}
