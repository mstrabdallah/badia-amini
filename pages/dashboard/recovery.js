import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSuspenseS1 from "@components/tools/loading/loadingSuspenseS1";

const Recovery = dynamic(
  () => import("@components/dashboard/recovery/recovery"),
  {
    suspense: true,
  }
);
const RecoverDocs = () => {
  return (
    <div>
      <Head>
        <title>استرجاع وثيقة التأمين - مستر امني</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>
      <Suspense fallback={<LoadingSuspenseS1 />}>
        <Recovery />
      </Suspense>
    </div>
  );
};
export default RecoverDocs;
