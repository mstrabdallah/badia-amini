import Head from 'next/head'
 
import Index from '@components/cars-insurance/cars-insurance'

export default function Carsinsurance() {


  return (
    <>
      <Head>
        <title>تأمين السيارات</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>

         <Index />
 
    </>
  )
}
