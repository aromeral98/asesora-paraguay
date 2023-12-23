import Head from "next/head";
import Layout from "../../components/shared/Layout";
import { jsonLDTypes } from "../../jsonLD/types/en/jsonLDTypes";
import ServicesContent from "../../components/ServicesContent";

export default function Residency() {
  return (
    <>
      <Head>
        <title>
          Asesora Paraguay - Residency Services | Temporary and Permanent
          Residency
        </title>
        <meta
          name="description"
          content="At Asesora Paraguay, we provide expert guidance and assistance for obtaining temporary and permanent residency in Paraguay. Learn about our comprehensive services for different types of residencies."
        />
        <meta
          name="keywords"
          content="Temporary residency, Permanent residency, Residency services, Paraguay, Immigration, Immigration advisory"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Asesora Paraguay - Residency Services | Temporary and Permanent Residency"
        />
        <meta
          property="og:description"
          content="Asesora Paraguay specializes in migration and processing of residency and citizenship in Paraguay. Our services include expert advice and support for entrepreneurs, investors, and digital nomads throughout the residency process."
        />
        <meta
          property="og:image"
          content="https://asesoraparaguay.com/img/card.webp"
        />
        <meta
          property="og:url"
          content="https://asesoraparaguay.com/services"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Asesora Paraguay - Residency Services | Temporary and Permanent Residency"
        />
        <meta
          name="twitter:description"
          content="Asesora Paraguay specializes in migration and processing of residency and citizenship in Paraguay. Our services include expert advice and support for entrepreneurs, investors, and digital nomads throughout the residency process."
        />
        <meta
          name="twitter:image"
          content="https://asesoraparaguay.com/img/card.webp"
        />
        <meta
          name="twitter:url"
          content="https://asesoraparaguay.com/services"
        />
       <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLDTypes.organization[0]) }}
        />
      </Head>
      <Layout>
        <section className="w-full"><ServicesContent /></section>
      </Layout>
    </>
  );
}
