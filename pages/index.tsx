import Head from 'next/head'
import Layout from '../components/shared/Layout'
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
        <meta id="idmetakeywords" name="keywords" content="paraguay, inmigracion, freelance, nomadas, digitales, inversion, offshore, impuestos, libertad, economia, tramite" />
      </Head>
      <div className='w-full'>
      <IndexCover />
      <IndexContent />
      <IndexCards />
      </div>
    </Layout>
  )
}
