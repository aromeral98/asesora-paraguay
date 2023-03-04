import Head from 'next/head'
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
  useEffect(() => {
    ReactGA.initialize([
      {
        trackingId: "G-M6PYSY246X",
      },
    ]);
    
    ReactGA.send({ hitType: "homepage", page: "/home" });
  }, []);
  
  return (
    <Layout>
        <Helmet>
        <title>Asesora Paraguay</title>
          <meta name="description" content="En Asesora Paraguay nos enfocamos en ayudar a freelancers a mover su residencia fiscal a Paraguay, tenemos a los mejores asesores fiscales y abogados de inmigracion para recomendarte la mejor opcion para tu situacion.
        Agilizamos todos tus tramites en tiempo record para que puedas empezar a ahorrar impuestos cuanto antes." />
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
