import Head from 'next/head'
import CertificatesAvailables from '../components/CertificatesAvailables'
import Layout from '../components/shared/Layout'

export default function Certificates() {
  return (
    <Layout>
      <Head>
        <title>Asesora Paraguay - Certificados</title>
        <meta name="description" content="Certificados necesarios para obtener tu residencia fiscal en Paraguay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='w-full'>
        <CertificatesAvailables />
      </section>
    </Layout>
  )
}
