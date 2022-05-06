import Head from 'next/head'
import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout'


export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Invest on paraguay</title>
        <meta name="description" content="Invest on paraguay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-full'>
      <ContactForm />
      </div>
    </Layout>
  )
}
