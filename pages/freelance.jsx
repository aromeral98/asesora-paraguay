import { useRouter } from 'next/router'
import { Helmet } from 'react-helmet'
import FreelanceContent from '../components/FreelanceContent'
import Layout from '../components/shared/Layout'
import { jsonLDGenerator } from '../jsonLD/jsonLDGenerator'


export default function Freelance() {
  const router = useRouter()
  const { pathname } = router

  return (
    <Layout>
      <Helmet>
        {
          jsonLDGenerator(pathname)?.map((fragment, index) => {
            return <script key={index} type="application/ld+json">
              {JSON.stringify(fragment)}
            </script>
          })
        }
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
