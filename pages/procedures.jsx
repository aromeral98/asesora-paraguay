import Head from 'next/head'
import ProceduresParaguay from '../components/ProceduresParaguay'
import Layout from '../components/shared/Layout'


export default function Procedures() {
  return (
    <Layout>
      <Head>
        <title>Asesora Paraguay - Tramites</title>
        <meta name="description" content="Procedimientos necesarios para obtener tu residencia fiscal en Paraguay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='w-full'>
        <ProceduresParaguay />
      </section>
    </Layout>
  )
}
