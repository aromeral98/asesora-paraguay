import Head from 'next/head'
import Layout from '../components/shared/Layout'
import IndexContent from '../components/IndexContent'
import IndexCover from '../components/IndexCover'
import IndexCards from '../components/IndexCards'
import { Helmet } from 'react-helmet';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Organization",
    "name": "Asesora Paraguay",
    "url": "https://asesoraparaguay.com/",
    "logo": "https://asesoraparaguay.com/logo.png",
    "description": "Ofrecemos servicios de asesoría para la tramitación de residencias en Paraguay a extranjeros, especialmente para nómadas digitales y freelancers que desean pagar menos impuestos.",
    "sameAs": [
      "https://www.facebook.com/AsesoraParaguay/",
      "https://twitter.com/AsesoraParaguay/",
      "https://www.instagram.com/AsesoraParaguay/"
    ]
  }
  return (
    <Layout>
      <Helmet>
      <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
        <title>Asesora Paraguay</title>
        <meta name="description" content="En Asesora Paraguay nos enfocamos en ayudar a freelancers a mover su residencia fiscal a Paraguay, tenemos a los mejores asesores fiscales y abogados de inmigracion para recomendarte la mejor opcion para tu situacion.
        Agilizamos todos tus tramites en tiempo record para que puedas empezar a ahorrar impuestos cuanto antes." />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      {/* <Head>
      <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
        <title>Asesora Paraguay</title>
        <meta name="description" content="En Asesora Paraguay nos enfocamos en ayudar a freelancers a mover su residencia fiscal a Paraguay, tenemos a los mejores asesores fiscales y abogados de inmigracion para recomendarte la mejor opcion para tu situacion.
        Agilizamos todos tus tramites en tiempo record para que puedas empezar a ahorrar impuestos cuanto antes." />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <div className='w-full'>
        <IndexCover />
        <IndexContent />
        <IndexCards />
      </div>
    </Layout>
  )
}
