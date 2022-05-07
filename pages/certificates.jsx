import Head from 'next/head'
import CertificatesAvailables from '../components/CertificatesAvailables'
import Layout from '../components/shared/Layout'

export default function Certificates() {
    return (
        <Layout>
        <Head>
          <title>Invest on paraguay</title>
          <meta name="description" content="Invest on paraguay" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className='w-full'>
          <CertificatesAvailables />
        </section>
      </Layout>
    )
  }
  