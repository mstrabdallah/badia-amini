import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSuspenseS1 from "@components/tools/loading/loadingSuspenseS1";

const Settings = dynamic(
  () => import("@components/dashboard/settings/settings"),
  {
    suspense: true,
  }
);
const RecoverDocs = () => {
  return (
    <div>
      <Head>
        <title>الاعدادات - مستر امني</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>
      <Suspense fallback={<LoadingSuspenseS1 />}>
        <Settings />
      </Suspense>
    </div>
  );
};
export default RecoverDocs;
