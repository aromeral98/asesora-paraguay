import Head from 'next/head'
import ContactForm from '../components/ContactForm'
import Layout from '../components/shared/Layout'


export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Invest on paraguay - Contacto</title>
        <meta name="description" content="Invest on paraguay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='w-full relative contactPattern'>
        <div className='lg:w-6/12 mx-auto relative z-10'>
        <ContactForm />
        </div>
      </section>
    </Layout>
  )
}
