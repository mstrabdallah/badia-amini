import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSuspenseS1 from "@components/tools/loading/loadingSuspenseS1";

const Cars = dynamic(() => import("@components/dashboard/cars/cars"), {
  suspense: true,
});
const RecoverDocs = () => {
  return (
    <div>
      <Head>
        <title>المركبات المسجله - مستر امني</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>
      <Suspense fallback={<LoadingSuspenseS1 />}>
        <Cars />
      </Suspense>
    </div>
  );
};
export default RecoverDocs;
