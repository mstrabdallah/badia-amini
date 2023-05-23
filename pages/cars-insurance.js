import Head from 'next/head'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import LoadingSuspenseS1 from '@components/tools/loading/loadingSuspenseS1'

const Index = dynamic(() => import('@components/cars-insurance/cars-insurance'), {
  ssr: false,
  // suspense: true,
})


export default function Carsinsurance() {


  return (
    <>
      <Head>
        <title>تأمين السيارات</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>

      <Suspense fallback={<LoadingSuspenseS1 />}>
        <Index />
      </Suspense>
    </>
  )
}
