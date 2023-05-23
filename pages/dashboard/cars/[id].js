import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSuspenseS1 from "@components/tools/loading/loadingSuspenseS1";

const Car = dynamic(() => import("@components/dashboard/cars/car"), {
  suspense: true,
});
const RecoverDocs = () => {
  return (
    <div>
      <Head>
        <title>مستر امني</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>
      <Suspense fallback={<LoadingSuspenseS1 />}>
        <Car />
      </Suspense>
    </div>
  );
};
export default RecoverDocs;
