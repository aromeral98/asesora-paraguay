import Layout from '../components/shared/Layout';
import IndexContent from '../components/IndexContent';
import IndexCover from '../components/IndexCover';
import IndexCards from '../components/IndexCards';
import { jsonLDTypes } from '../jsonLD/types/en/jsonLDTypes';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Asesora Paraguay - Your Source for Information about Paraguay</title>
        <meta name="description" content="Explore our blog to get updated information about Paraguay, its culture, tourism, and more. Asesora Paraguay is your online guide to discover everything related to this beautiful country." />
        <meta name="keywords" content="Paraguay, blog, information, culture, tourism" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Asesora Paraguay - Your Source for Information about Paraguay" />
        <meta property="og:description" content="Explore our blog to get updated information about Paraguay, its culture, tourism, and more. Asesora Paraguay is your online guide to discover everything related to this beautiful country." />
        <meta property="og:image" content="https://asesoraparaguay.com/img/articles/tourism/0.jpg" />
        <meta property="og:url" content="https://asesoraparaguay.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Asesora Paraguay - Your Source for Information about Paraguay" />
        <meta name="twitter:description" content="Explore our blog to get updated information about Paraguay, its culture, tourism, and more. Asesora Paraguay is your online guide to discover everything related to this beautiful country." />
        <meta name="twitter:image" content="https://asesoraparaguay.com/img/articles/tourism/0.jpg" />
        <meta name="twitter:url" content="https://asesoraparaguay.com" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLDTypes.organization[0])}
        </script>
      </Head>
      <Layout>
        <div className='w-full'>
          <IndexCover />
          <IndexContent />
          <IndexCards />
        </div>
      </Layout>
    </>
  );
}
