import { jsonLDTypes } from '../../../jsonLD/types/en/jsonLDTypes'
import { articlesJSONLD } from '../../../jsonLD/types/en/articlesJSONLD'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../../../components/shared/Layout'
import ShareBar from '../../../components/shared/ShareBar'
import { generateArticle } from '../../../helpers/contentGenerator'

export default function ArticleEN({ id, data = {} }) {
  let path = id.split('/')[1]
  const [article, setArticle] = useState()
  useEffect(() => {
    if (data && data.data) {
      setArticle(JSON.parse(data?.data)?.default)
    }
  }, [data])


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
        <article className='relative py-8 lg:px-8 px-4 bg-white w-full lg:w-8/12 mx-auto flex flex-col grow'>
          <section className="container space-y-4 text-left mx-auto px-5" >
            <h1 className="text-secondaryColor text-xl lg:text-3xl font-medium capitalize">
              {article?.seo?.title}
            </h1>
            <div className="space-y-4 lg:space-y-6" dangerouslySetInnerHTML={{ __html: generateArticle(article) }}>
            </div>
          </section>
          {/* <div className="flex justify-end my-8">
            <ShareBar title={article?.seo?.title} description={article?.seo?.description} />
          </div> */}
          <div className="flex justify-end my-8">
            <ShareBar title={articlesJSONLD?.[id]?.[0].name} />
          </div>
        </article>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'advantages-being-freelance-paraguay' } },
      { params: { id: 'climate-paraguay' } },
      { params: { id: 'low-taxed-countries-world' } },
      { params: { id: 'tourism-paraguay-sites-visit' } },
      { params: { id: 'how-paraguay-attracts-freelancers' } },
      { params: { id: 'paraguay-the-andorra-of-south-america' } },
      { params: { id: 'paraguay-cuisine-discover-traditional-dishes' } },
      { params: { id: 'paraguay-history-culture' } },
      { params: { id: 'import-exports-paraguay' } },
      { params: { id: 'largest-river-fleets-in-the-world' } },
    ],
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const rawData = await import(`../../../articles/en/${id}.json`)
  const serializableObject = { /* your serializable data */ };
  return {
    props: {
      id,
      data: Object.assign({}, serializableObject, { data: JSON.stringify(rawData) })
    }
  };
}