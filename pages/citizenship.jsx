import Head from 'next/head'
import CitizenshipGetIt from '../components/CitizenshipGetIt'
import Layout from '../components/shared/Layout'


export default function Citizenship() {
  return (
    <Layout>
      <Head>
        <title>Invest on paraguay - Ciudadania</title>
        <meta name="description" content="Invest on paraguay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='w-full'>
        <CitizenshipGetIt />
      </section>
    </Layout>
  )
}
