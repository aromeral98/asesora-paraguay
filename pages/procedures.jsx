import Head from 'next/head'
import ProceduresParaguay from '../components/ProceduresParaguay'
import Layout from '../components/shared/Layout'


export default function Procedures() {
  return (
    <Layout>
      <Head>
        <title>Invest on paraguay || Tramites</title>
        <meta name="description" content="Invest on paraguay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='w-full'>
        <ProceduresParaguay />
      </section>
    </Layout>
  )
}
