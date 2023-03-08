import Layout from '../components/shared/Layout'
import IndexContent from '../components/IndexContent'
import IndexCover from '../components/IndexCover'
import IndexCards from '../components/IndexCards'
import { Helmet } from 'react-helmet';
import { jsonLDTypes } from '../jsonLD/types/jsonLDTypes'

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLDTypes.organization[0])}
        </script>
        <title>Asesora Paraguay - Despacho especializado en migración y tramitación de residencias y nacionalidad</title>
        <meta name="description" content="Somos un despacho especializado en migración y tramitación de residencias y nacionalidad en Paraguay. Brindamos asesoría a empresarios, inversores y nómadas digitales en todo momento del proceso." />
        <meta name="keywords" content="Migración, tramitación de residencias, nacionalidad, Paraguay, empresarios, inversores, nómadas digitales, asesoría" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <div className='w-full'>
        <IndexCover />
        <IndexContent />
        <IndexCards />
      </div>
    </Layout>
  )
}
