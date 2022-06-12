import Head from 'next/head'
import ContactForm from '../components/ContactForm'
import Layout from '../components/shared/Layout'


export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Asesora Paraguay - Contacto</title>
        <meta name="description" content="Contacta con nosotros para solicitar cualquier tipo de informacion, tramites, residencia, ventajas fiscales, tiempos de obtención..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='w-full relative contactPattern'>
        <div className='lg:w-6/12 mx-auto relative z-10 pt-10 bg-white appearRightContent'>
          <ContactForm bigTitle/>
        </div>
      </section>
    </Layout>
  )
}
