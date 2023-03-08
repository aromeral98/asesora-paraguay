import { Helmet } from 'react-helmet'
import ResidencyContent from '../components/ResidencyContent'
import Layout from '../components/shared/Layout'
import { jsonLDTypes } from '../jsonLD/types/jsonLDTypes'


export default function Residency() {
  return (
    <Layout>
      <Helmet>
      <script type="application/ld+json">
          {JSON.stringify(jsonLDTypes.organization)}
        </script>
        <title>Tipos de residencias en Paraguay - Requisitos para residencia temporal y permanente | Asesora Paraguay</title>
        <meta name="description" content="En Asesora Paraguay te explicamos los requisitos para obtener una residencia temporal o permanente en Paraguay. Conoce los tipos de residencias disponibles y sus características." />
        <meta name="keywords" content="Residencia temporal, Residencia permanente, Requisitos de residencia, Paraguay, Inmigración, Asesoría migratoria" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <section className='w-full'>
        <ResidencyContent />
      </section>
    </Layout>
  )
}
