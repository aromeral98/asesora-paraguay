import Layout from '../components/shared/Layout'
import IndexContent from '../components/IndexContent'
import IndexCover from '../components/IndexCover'
import IndexCards from '../components/IndexCards'
import { jsonLDGenerator } from '../jsonLD/jsonLDGenerator'
import { Helmet } from 'react-helmet';
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'

export default function Home() {
  const router = useRouter()
  const { pathname } = router
  
  return (
    <Layout>
        <Helmet>
        <title>Asesora Paraguay - Despacho especializado en migración y tramitación de residencias y nacionalidad</title>
        <meta name="description" content="Somos un despacho especializado en migración y tramitación de residencias y nacionalidad en Paraguay. Brindamos asesoría a empresarios, inversores y nómadas digitales en todo momento del proceso." />
  <meta name="keywords" content="Migración, tramitación de residencias, nacionalidad, Paraguay, empresarios, inversores, nómadas digitales, asesoría" />
          <link rel="icon" href="/favicon.ico" />
          {
            jsonLDGenerator(pathname)?.map((fragment, index) => {
              return <script key={index} type="application/ld+json">
                {JSON.stringify(fragment)}
              </script>
            })
          }
        </Helmet>
      <div className='w-full'>
        <IndexCover />
        <IndexContent />
        <IndexCards />
      </div>
    </Layout>
  )
}
