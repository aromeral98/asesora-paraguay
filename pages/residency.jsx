import Head from 'next/head'
import ResidencyContent from '../components/ResidencyContent'
import Layout from '../components/shared/Layout'


export default function Residency() {
  return (
    <Layout>
      <Head>
        <title>Asesora Paraguay - Residencia</title>
        <meta name="description" content="Agilizamos los tramites para tu residencia fiscal en Paraguay. Empiece a ahorrar impuestos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='w-full'>
        <ResidencyContent />
      </section>
    </Layout>
  )
}
