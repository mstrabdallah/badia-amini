import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSuspenseS1 from "@components/tools/loading/loadingSuspenseS1";

const Rate = dynamic(() => import("@components/dashboard/rate/rate"), {
  suspense: true,
});
const RateP = () => {
  return (
    <div>
      <Head>
        <title>شاركنا رأيك - مستر امني</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>
      <Suspense fallback={<LoadingSuspenseS1 />}>
        <Rate />
      </Suspense>
    </div>
  );
};
export default RateP;
