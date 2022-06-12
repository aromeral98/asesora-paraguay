import Head from 'next/head'
import CitizenshipGetIt from '../components/CitizenshipGetIt'
import Layout from '../components/shared/Layout'


export default function Citizenship() {
  return (
    <Layout>
      <Head>
        <title>Asesora Paraguay - Ciudadania</title>
        <meta name="description" content="Obten tu cédula de identidad paraguaya en tiempo record con Asesora Paraguay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='w-full'>
        <CitizenshipGetIt />
      </section>
    </Layout>
  )
}
