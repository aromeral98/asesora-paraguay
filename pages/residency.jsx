import { Helmet } from 'react-helmet'
import ResidencyContent from '../components/ResidencyContent'
import Layout from '../components/shared/Layout'
import { jsonLDTypes } from '../jsonLD/types/jsonLDTypes'


export default function Residency() {
  return (
    <>
      <Helmet>
        <title>Tipos de residencias en Paraguay - Requisitos para residencia temporal y permanente | Asesora Paraguay</title>
        <meta name="description" content="En Asesora Paraguay te explicamos los requisitos para obtener una residencia temporal o permanente en Paraguay. Conoce los tipos de residencias disponibles y sus características." />
        <meta name="keywords" content="Residencia temporal, Residencia permanente, Requisitos de residencia, Paraguay, Inmigración, Asesoría migratoria" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Asesora Paraguay - Despacho especializado en migración y tramitación de residencias y nacionalidad" />
        <meta property="og:description" content="Somos un despacho especializado en migración y tramitación de residencias y nacionalidad en Paraguay. Brindamos asesoría a empresarios, inversores y nómadas digitales en todo momento del proceso." />
        <meta property="og:image" content="https://asesoraparaguay.com/img/card.webp" />
        <meta property="og:url" content="https://asesoraparaguay.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Asesora Paraguay - Despacho especializado en migración y tramitación de residencias y nacionalidad" />
        <meta name="twitter:description" content="Somos un despacho especializado en migración y tramitación de residencias y nacionalidad en Paraguay. Brindamos asesoría a empresarios, inversores y nómadas digitales en todo momento del proceso." />
        <meta name="twitter:image" content="https://asesoraparaguay.com/img/card.webp" />
        <meta name="twitter:url" content="https://asesoraparaguay.com" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLDTypes.organization[0])}
        </script>
      </Helmet>
      <Layout>
        <section className='w-full'>
          <ResidencyContent />
        </section>
      </Layout>
    </>
  )
}
