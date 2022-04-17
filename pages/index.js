import Head from 'next/head'
import Layout from '../components/Layout'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Invest on paraguay</title>
        <meta name="description" content="Invest on paraguay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-full'>
      <Slider />
      </div>
    </Layout>
  )
}
