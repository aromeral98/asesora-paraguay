import Head from 'next/head'
import FreelanceContent from '../components/FreelanceContent'
import Layout from '../components/shared/Layout'


export default function Freelance() {
  return (
    <Layout>
      <Head>
        <title>Asesora Paraguay - Freelance</title>
        <meta name="description" content="Aprovechate de un régimen fiscal optimo para freelancers y nómadas digitales. Te daremos el mejor asesoramiento" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='w-full'>
          <FreelanceContent />
      </section>
    </Layout>
  )
}
