import Head from 'next/head'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import LoadingSuspenseS1 from '@components/tools/loading/loadingSuspenseS1'

const MedicalInsurance = dynamic(() => import('@components/medical-insurance/medical-insurance'), {
  suspense: true,
})


export default function Home() {


  return (
    <div>
      <Head>
        <title>التأمين الطبي</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>

      <Suspense fallback={<LoadingSuspenseS1 />}>
        <MedicalInsurance />
      </Suspense>
    </div>
  )
}
