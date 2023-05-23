import Head from "next/head";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSuspenseS1 from "@components/tools/loading/loadingSuspenseS1";

const ComprehensiveVehicleInsurance = dynamic(() => import("@components/dashboard/comprehensive-vehicle-insurance/comprehensive-vehicle-insurance"), {
  suspense: true,
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>شراء وثيقة تأمين شامل جديده - مستر امني</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>

      <Suspense fallback={<LoadingSuspenseS1 />}>
        <ComprehensiveVehicleInsurance />
      </Suspense>
    </div>
  );
}
