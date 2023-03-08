import { Helmet } from 'react-helmet'
import ContactForm from '../components/ContactForm'
import Layout from '../components/shared/Layout'
import { jsonLDTypes } from '../jsonLD/types/jsonLDTypes'

export default function Contact() {
  return (
    <Layout>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLDTypes.organization)}
        </script>
        <title>Contacto | Asesora Paraguay - Tu asesor migratorio</title>
        <meta name="description" content="Contáctanos para cualquier duda o pregunta relacionada con nuestros servicios de asesoramiento migratorio. Rellena el formulario de contacto y te responderemos lo antes posible." />
        <meta name="keywords" content="Contacto, Asesora Paraguay, Asesoramiento migratorio, Preguntas frecuentes, Formulario de contacto" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <section className='w-full relative contactPattern'>
        <div className='lg:w-6/12 mx-auto relative z-10 pt-10 bg-white'>
          <ContactForm bigTitle />
        </div>
      </section>
    </Layout>
  )
}
