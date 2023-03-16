import Layout from '../components/shared/Layout'
import IndexContent from '../components/IndexContent'
import IndexCover from '../components/IndexCover'
import IndexCards from '../components/IndexCards'
import { jsonLDTypes } from '../jsonLD/types/jsonLDTypes'
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Asesora Paraguay - Despacho especializado en migración y tramitación de residencias y nacionalidad</title>
        <meta name="description" content="Somos un despacho especializado en migración y tramitación de residencias y nacionalidad en Paraguay. Brindamos asesoría a empresarios, inversores y nómadas digitales en todo momento del proceso." />
        <meta name="keywords" content="Migración, tramitación de residencias, nacionalidad, Paraguay, empresarios, inversores, nómadas digitales, asesoría" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Asesora Paraguay - Despacho especializado en migración y tramitación de residencias y nacionalidad" />
        <meta property="og:description" content="Somos un despacho especializado en migración y tramitación de residencias y nacionalidad en Paraguay. Brindamos asesoría a empresarios, inversores y nómadas digitales en todo momento del proceso." />
        <meta property="og:image" content="https://asesoraparaguay.com/img/articles/tourism/0.jpg" />
        <meta property="og:url" content="https://asesoraparaguay.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Asesora Paraguay - Despacho especializado en migración y tramitación de residencias y nacionalidad" />
        <meta name="twitter:description" content="Somos un despacho especializado en migración y tramitación de residencias y nacionalidad en Paraguay. Brindamos asesoría a empresarios, inversores y nómadas digitales en todo momento del proceso." />
        <meta name="twitter:image" content="https://asesoraparaguay.com/img/articles/tourism/0.jpg" />
        <meta name="twitter:url" content="https://asesoraparaguay.com" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLDTypes.organization[0])}
        </script>
      </Head>
      <Layout>
        <div className='w-full'>
          <IndexCover />
          <IndexContent />
          <IndexCards />
        </div>
      </Layout>
    </>
  )
}
