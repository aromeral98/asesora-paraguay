import Head from 'next/head'
import Layout from '../components/Layout'
import IndexContent from '../components/IndexContent'
import IndexCover from '../components/IndexCover'
import IndexCards from '../components/IndexCards'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Invest on paraguay</title>
        <meta name="description" content="Invest on paraguay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-full'>
      <IndexCover />
      <IndexContent />
      <IndexCards />
      </div>
    </Layout>
  )
}
