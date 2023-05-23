import Head from "next/head";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSuspenseS1 from "@components/tools/loading/loadingSuspenseS1";

const Identities = dynamic(
  () => import("@components/dashboard/identities/Identities"),
  {
    suspense: true,
  }
);

export default function IDs() {
  return (
    <div>
      <Head>
        <title>الهويات المسجله - مستر امني</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>

      <Suspense fallback={<LoadingSuspenseS1 />}>
        <Identities />
      </Suspense>
    </div>
  );
}
