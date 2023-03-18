import Head from 'next/head'
import ContactForm from '../components/ContactForm'
import Layout from '../components/shared/Layout'
 import { jsonLDTypes } from '../jsonLD/types/en/jsonLDTypes'

export default function Contact() {
  return (
    <>
      <Head>
      <title>Contact | Asesora Paraguay - Your Migration Advisor</title>
        <meta name="description" content="Contact us for any questions or inquiries related to our migration advisory services. Fill out the contact form and we will respond as soon as possible." />
        <meta name="keywords" content="Contact, Asesora Paraguay, Migration advisory, FAQ, Contact form" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Asesora Paraguay - Specialized in migration and processing of residencies and nationality" />
        <meta property="og:description" content="We are a specialized firm in migration and processing of residencies and nationality in Paraguay. We provide advice to entrepreneurs, investors and digital nomads at every step of the process." />
        <meta property="og:image" content="https://asesoraparaguay.com/img/articles/advantages/0.webp" />
        <meta property="og:url" content="https://asesoraparaguay.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Asesora Paraguay - Specialized in migration and processing of residencies and nationality" />
        <meta name="twitter:description" content="We are a specialized firm in migration and processing of residencies and nationality in Paraguay. We provide advice to entrepreneurs, investors and digital nomads at every step of the process." />
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
