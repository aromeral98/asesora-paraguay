import Head from 'next/head'
import FreelanceContent from '../../components/FreelanceContent'
import Layout from '../../components/shared/Layout'
 import { jsonLDTypes } from '../../jsonLD/types/en/jsonLDTypes'


export default function Freelance() {

  return (
    <>
      <Head>
      <title>Moving to Paraguay as a Freelancer: Advantages and Disadvantages | Asesora Paraguay</title>
        <meta name="description" content="Discover the advantages and disadvantages of moving to Paraguay as a freelancer. Learn about the territorial taxation system, regulation of visits to the country, climate for entrepreneurship, and much more." />
        <meta name="keywords" content="Moving to Paraguay, Freelancer, Taxes, Territorial taxation, Permanent residency, Residence rights, Paraguay, Immigration, Migration consultancy, Digital nomads, Countries to immigrate as a freelancer, Where to pay less taxes" />
        <meta property="og:title" content="Moving to Paraguay as a Freelancer: Advantages and Disadvantages | Asesora Paraguay" />
        <meta property="og:description" content="Discover the advantages and disadvantages of moving to Paraguay as a freelancer. Learn about the territorial taxation system, regulation of visits to the country, climate for entrepreneurship, and much more." />
        <meta property="og:image" content="https://asesoraparaguay.com/img/articles/tourism/3.jpg" />
        <meta property="og:url" content="https://asesoraparaguay.com/move-to-paraguay-as-a-freelancer" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Moving to Paraguay as a Freelancer: Advantages and Disadvantages | Asesora Paraguay" />
        <meta name="twitter:description" content="Discover the advantages and disadvantages of moving to Paraguay as a freelancer. Learn about the territorial taxation system, regulation of visits to the country, climate for entrepreneurship, and much more." />
        <meta name="twitter:image" content="https://asesoraparaguay.com/img/articles/tourism/3.jpg" />
        <meta name="twitter:url" content="https://asesoraparaguay.com/move-to-paraguay-as-a-freelancer" />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLDTypes.organization[0]) }}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLDTypes.freelance[0]) }}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLDTypes.freelance[1]) }}
        />
      </Head>
        <section className='w-full'>
          <FreelanceContent />
        </section>
    </>
  )
}
