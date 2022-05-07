import Head from 'next/head'
import ResidencyContent from '../components/ResidencyContent'
import Layout from '../components/shared/Layout'


export default function Residency() {
  return (
    <Layout>
      <Head>
        <title>Invest on paraguay - Residencia</title>
        <meta name="description" content="Invest on paraguay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='w-full'>
        <ResidencyContent />
      </section>
    </Layout>
  )
}
