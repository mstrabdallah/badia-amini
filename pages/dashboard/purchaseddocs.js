import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSuspenseS1 from "@components/tools/loading/loadingSuspenseS1";

const Purchdocs = dynamic(
  () => import("@components/dashboard/purchdocs/purchdocs"),
  {
    suspense: true,
  }
);
const Purchaseddocs = () => {
  return (
    <div>
      <Head>
        <title>وثائق تم شراؤها - مستر امني</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>
      <Suspense fallback={<LoadingSuspenseS1 />}>
        <Purchdocs />
      </Suspense>
    </div>
  );
};
export default Purchaseddocs;
