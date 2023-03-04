import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { Helmet } from 'react-helmet'
import ContactForm from '../components/ContactForm'
import Layout from '../components/shared/Layout'
import { jsonLDGenerator } from '../jsonLD/jsonLDGenerator'

export default function Contact() {
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
        <title>Asesora Paraguay</title>
        <meta name="description" content="En Asesora Paraguay nos enfocamos en ayudar a freelancers a mover su residencia fiscal a Paraguay, tenemos a los mejores asesores fiscales y abogados de inmigracion para recomendarte la mejor opcion para tu situacion.
        Agilizamos todos tus tramites en tiempo record para que puedas empezar a ahorrar impuestos cuanto antes." />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <section className='w-full relative contactPattern'>
        <div className='lg:w-6/12 mx-auto relative z-10 pt-10 bg-white'>
          <ContactForm bigTitle/>
        </div>
      </section>
    </Layout>
  )
}
