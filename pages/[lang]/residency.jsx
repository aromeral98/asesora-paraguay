import Head from 'next/head'
import ResidencyContent from '../../components/ResidencyContent'
import Layout from '../../components/shared/Layout'
 import { jsonLDTypes } from '../../jsonLD/types/en/jsonLDTypes'


export default function Residency() {
  return (
    <>
      <Head>
        <title>Types of Residencies in Paraguay - Requirements for Temporary and Permanent Residency | Asesora Paraguay</title>
        <meta name="description" content="At Asesora Paraguay we explain the requirements for obtaining temporary or permanent residency in Paraguay. Learn about the available types of residencies and their characteristics." />
        <meta name="keywords" content="Temporary residency, Permanent residency, Residency requirements, Paraguay, Immigration, Immigration advisory" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Asesora Paraguay - Specialized in migration and processing of residency and citizenship" />
        <meta property="og:description" content="We are a specialized firm in migration and processing of residency and citizenship in Paraguay. We provide advice to entrepreneurs, investors, and digital nomads throughout the process." />
        <meta property="og:image" content="https://asesoraparaguay.com/img/card.webp" />
        <meta property="og:url" content="https://asesoraparaguay.com/residency" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Asesora Paraguay - Specialized in migration and processing of residency and citizenship" />
        <meta name="twitter:description" content="We are a specialized firm in migration and processing of residency and citizenship in Paraguay. We provide advice to entrepreneurs, investors, and digital nomads throughout the process." />
        <meta name="twitter:image" content="https://asesoraparaguay.com/img/card.webp" />
        <meta name="twitter:url" content="https://asesoraparaguay.com/residency" />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLDTypes.organization[0]) }}
        />
      </Head>
      <Layout>
        <section className='w-full'>
          <ResidencyContent />
        </section>
      </Layout>
    </>
  )
}
