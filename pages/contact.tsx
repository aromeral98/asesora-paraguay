import Head from 'next/head'
import ContactForm from '../components/ContactForm'
import Layout from '../components/shared/Layout'


export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Invest on paraguay</title>
        <meta name="description" content="Invest on paraguay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='w-full relative'>
        <div className='lg:w-6/12 mx-auto relative z-10'>
        <ContactForm />
        </div>
        <img className='hidden xl:block h-100 absolute right-10 top-20 z-0 opacity-80' src='https://upload.wikimedia.org/wikipedia/commons/6/69/Ja%C3%A9n-Catedral_de_la_Asunci%C3%B3n_VPSM-20110919_%28cropped%29.jpg'/>
      </section>
    </Layout>
  )
}
