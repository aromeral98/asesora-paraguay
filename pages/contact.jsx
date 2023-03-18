import Head from 'next/head'
import ContactForm from '../components/ContactForm'
import Layout from '../components/shared/Layout'
 import { jsonLDTypes } from '../jsonLD/types/en/jsonLDTypes'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contacto | Asesora Paraguay - Tu asesor migratorio</title>
        <meta name="description" content="Contáctanos para cualquier duda o pregunta relacionada con nuestros servicios de asesoramiento migratorio. Rellena el formulario de contacto y te responderemos lo antes posible." />
        <meta name="keywords" content="Contacto, Asesora Paraguay, Asesoramiento migratorio, Preguntas frecuentes, Formulario de contacto" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Asesora Paraguay - Despacho especializado en migración y tramitación de residencias y nacionalidad" />
        <meta property="og:description" content="Somos un despacho especializado en migración y tramitación de residencias y nacionalidad en Paraguay. Brindamos asesoría a empresarios, inversores y nómadas digitales en todo momento del proceso." />
        <meta property="og:image" content="https://asesoraparaguay.com/img/articles/advantages/0.webp" />
        <meta property="og:url" content="https://asesoraparaguay.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Asesora Paraguay - Despacho especializado en migración y tramitación de residencias y nacionalidad" />
        <meta name="twitter:description" content="Somos un despacho especializado en migración y tramitación de residencias y nacionalidad en Paraguay. Brindamos asesoría a empresarios, inversores y nómadas digitales en todo momento del proceso." />
        <meta name="twitter:image" content="https://asesoraparaguay.com/img/articles/advantages/0.webp" />
        <meta name="twitter:url" content="https://asesoraparaguay.com" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLDTypes.organization[0])}
        </script>
      </Head>
      <Layout>
        <section className='w-full relative contactPattern'>
          <div className='lg:w-6/12 mx-auto relative z-10 pt-10 bg-white'>
            <ContactForm bigTitle />
          </div>
        </section>
      </Layout>
    </>
  )
}
