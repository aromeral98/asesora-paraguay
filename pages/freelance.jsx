import Head from 'next/head'
import FreelanceContent from '../components/FreelanceContent'
import Layout from '../components/shared/Layout'


export default function Freelance() {
  return (
    <Layout>
      <Head>
        <title>Invest on paraguay - Freelance</title>
        <meta name="description" content="Invest on paraguay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='w-full'>
          <FreelanceContent />
      </section>
    </Layout>
  )
}
