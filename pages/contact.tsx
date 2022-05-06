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
      <div className='w-full'>
        <div className='w-6/12 mx-auto'>
        <ContactForm />
        </div>
      </div>
    </Layout>
  )
}
