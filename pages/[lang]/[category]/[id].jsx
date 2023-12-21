import { jsonLDTypes } from '../../../jsonLD/types/en/jsonLDTypes'
import { articlesJSONLD } from '../../../jsonLD/types/en/articlesJSONLD'
import Head from 'next/head'
import Layout from '../../../components/shared/Layout'
import Post from '../../../components/shared/Post'

export default function ArticleEN({ id }) {

  return (
    <>
      <Head>
        <title>{articlesJSONLD?.[id]?.[0]?.name}</title>
        <meta name="description" content={articlesJSONLD?.[id]?.[0]?.description} />
        <meta name="keywords" content="Paraguay, freelancers, autónomos, bajos impuestos, facilidades para emprendedores, mano de obra barata" />
        <meta property="og:title" content={articlesJSONLD?.[id]?.[0]?.name} />
        <meta property="og:description" content={articlesJSONLD?.[id]?.[0]?.description} />
        <meta property="og:image" content={articlesJSONLD?.[id]?.[0]?.image.url} />
        <meta property="og:url" content={`https://asesoraparaguay.com/article/${articlesJSONLD?.[id]?.[0]?.id}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={articlesJSONLD?.[id]?.[0]?.name} />
        <meta name="twitter:description" content={articlesJSONLD?.[id]?.[0]?.description} />
        <meta name="twitter:image" content={articlesJSONLD?.[id]?.[0]?.image.url} />
        <meta name="twitter:url" content={`https://asesoraparaguay.com/article/${articlesJSONLD?.[id]?.[0]?.id}`} />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLDTypes.organization[0])}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(articlesJSONLD?.[id]?.[0])}
        </script>
      </Head>
      <Layout>
      <section className='container p-8 mx-auto space-y-6 sm:space-y-12'>
                <Post />
            </section>
      </Layout>
    </>
  )
}
