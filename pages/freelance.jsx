import { Helmet } from 'react-helmet'
import FreelanceContent from '../components/FreelanceContent'
import Layout from '../components/shared/Layout'
import { jsonLDTypes } from '../jsonLD/types/jsonLDTypes'


export default function Freelance() {

  return (
    <Layout>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLDTypes.organization[0])}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(jsonLDTypes.freelance[0])}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(jsonLDTypes.freelance[1])}
        </script>
        <title>Mudarse a Paraguay como Freelance: Ventajas e Inconvenientes | Asesora Paraguay</title>
        <meta name="description" content="Descubre las ventajas e inconvenientes de mudarte a Paraguay como freelance. Te contamos sobre el sistema de tributación territorial, la regulación de visitas al país, el clima para emprendimiento y mucho más." />
        <meta name="keywords" content="Mudarse a Paraguay, Freelance, Ventajas de mudarse a Paraguay, Sistema tributario, Residencia permanente, Derechos de residencia, Paraguay, Inmigración, Asesoría migratoria" />
      </Helmet>
      <section className='w-full'>
        <FreelanceContent />
      </section>
    </Layout>
  )
}
