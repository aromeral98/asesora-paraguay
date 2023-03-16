import Head from 'next/head'
import FreelanceContent from '../components/FreelanceContent'
import Layout from '../components/shared/Layout'
import { jsonLDTypes } from '../jsonLD/types/jsonLDTypes'


export default function Freelance() {

  return (
    <>
      <Head>
        <title>Mudarse a Paraguay como Freelance: Ventajas e Inconvenientes | Asesora Paraguay</title>
        <meta name="description" content="Descubre las ventajas e inconvenientes de mudarte a Paraguay como freelance. Te contamos sobre el sistema de tributación territorial, la regulación de visitas al país, el clima para emprendimiento y mucho más." />
        <meta name="keywords" content="Mudarse a Paraguay, Freelance, Ventajas de mudarse a Paraguay, Sistema tributario, Residencia permanente, Derechos de residencia, Paraguay, Inmigración, Asesoría migratoria" />
        <meta property="og:title" content="Asesora Paraguay - Despacho especializado en migración y tramitación de residencias y nacionalidad" />
        <meta property="og:description" content="Somos un despacho especializado en migración y tramitación de residencias y nacionalidad en Paraguay. Brindamos asesoría a empresarios, inversores y nómadas digitales en todo momento del proceso." />
        <meta property="og:image" content="https://asesoraparaguay.com/img/articles/tourism/3.jpg" />
        <meta property="og:url" content="https://asesoraparaguay.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Asesora Paraguay - Despacho especializado en migración y tramitación de residencias y nacionalidad" />
        <meta name="twitter:description" content="Somos un despacho especializado en migración y tramitación de residencias y nacionalidad en Paraguay. Brindamos asesoría a empresarios, inversores y nómadas digitales en todo momento del proceso." />
        <meta name="twitter:image" content="https://asesoraparaguay.com/img/articles/tourism/3.jpg" />
        <meta name="twitter:url" content="https://asesoraparaguay.com" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLDTypes.organization[0])}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(jsonLDTypes.freelance[0])}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(jsonLDTypes.freelance[1])}
        </script>
      </Head>
      <Layout>
        <section className='w-full'>
          <FreelanceContent />
        </section>
      </Layout>
    </>
  )
}
