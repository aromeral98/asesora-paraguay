import { jsonLDTypes } from '../../../jsonLD/types/en/jsonLDTypes'
import { articlesJSONLD } from '../../../jsonLD/types/en/articlesJSONLD'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../../../components/shared/Layout'
import ShareBar from '../../../components/shared/ShareBar'

export default function ArticleEN({ id, data = {} }) {
  let path = id.split('/')[1]
  const [article, setArticle] = useState()
  useEffect(() => {
    if (data && data.data) {
      setArticle(JSON.parse(data?.data)?.default)
    }
  }, [data])

  function renderArticle() {
    let html = '';
    if (article) {
      for (const [key, value] of Object.entries(article['article'])) {
        if (key.startsWith('title')) {
          html += `<h5 class="text-lg lg:text-xl font-bold leading-tight lg:leading-relaxed">${value}</h5>`;
        } else if (key.startsWith('paragraph')) {
          html += `<p class="text-dark lg:text-lg">${value}</p>`;
        } else if (key.startsWith('image')) {
          html += `<img src=${value.src} alt=${value.alt} />`;
        }
      }
    }


    return html;
  }
  console.log(articlesJSONLD?.[id]?.[0].name)

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
            <h2 className="text-secondaryColor text-xl lg:text-3xl font-medium capitalize">
              {article?.seo?.title}
            </h2>
            <div className="space-y-4 lg:space-y-6" dangerouslySetInnerHTML={{ __html: renderArticle() }}>
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

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'advantages-being-freelance-paraguay' } },
      { params: { id: 'climate-paraguay' } },
      { params: { id: 'low-taxed-countries-world' } },
      { params: { id: 'tourism-paraguay-sites-visit' } }
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