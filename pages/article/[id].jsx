import { Helmet } from 'react-helmet'
import Layout from '../../components/shared/Layout'
import ShareBar from '../../components/shared/ShareBar'
import { jsonLDTypes } from '../../jsonLD/types/jsonLDTypes'
import { articlesJSONLD } from '../../jsonLD/types/articlesJSONLD'
import { useEffect, useState } from 'react'

export default function Article({ id, data = {} }) {
  let path = id.split('/')[1]
  const [article, setArticle] = useState()
  useEffect(() => {
    if(data && data.data){
      setArticle(JSON.parse(data?.data)?.default)
    }
      
  }, [])

  function renderArticle() {
    let html = '';
    if(article){
      for (const [key, value] of Object.entries(article['article'])) {
        if (key.startsWith('title')) {
          html += `<h5 class="text-lg lg:text-xl font-bold leading-tight lg:leading-relaxed">${value}</h5>`;
        } else if (key.startsWith('paragraph')) {
          html += `<p class="text-dark lg:text-lg">${value}</p>`;
        } else if (key.startsWith('image')) {
          html += `<img src=${value.src} alt=${value.alt} style={{height: ${value.height}, width: ${value.width}}}/>`;
        }
      }
    }
    

    return html;
  }
  return (
    <Layout>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLDTypes.organization[0])}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(articlesJSONLD?.[id]?.[0])}
        </script>
        <title>{article?.seo?.title}</title>
        <meta name="description" content={article?.seo.description} />
        <meta name="keywords" content="Paraguay, freelancers, autónomos, bajos impuestos, facilidades para emprendedores, mano de obra barata" />
        <meta property="og:title" content={article?.seo.title} />
        <meta property="og:description" content={article?.seo.description} />
        <meta property="og:image" content="URL de la imagen que quieras mostrar en la publicación" />
        <meta property="og:url" content="URL del artículo en tu sitio web" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article?.seo.title} />
        <meta name="twitter:description" content={article?.seo.description} />
        <meta name="twitter:image" content="URL de la imagen que quieras mostrar en la publicación" />
        <meta name="twitter:url" content="URL del artículo en tu sitio web" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <article className='relative py-8 lg:px-8 px-4 bg-white w-full lg:w-8/12 mx-auto flex flex-col grow'>
        <section className="container space-y-4 text-left mx-auto px-5" >
          <h2 className="text-secondaryColor text-xl lg:text-3xl font-medium capitalize">
            {article?.seo?.title}
          </h2>
          <div className="space-y-4 lg:space-y-6" dangerouslySetInnerHTML={{ __html: renderArticle() }}>
          </div>
        </section>
        <div className="flex justify-end my-8">
          <ShareBar title={article?.seo?.title} description={article?.seo?.description} />
        </div>
      </article>
    </Layout>
  )
}

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'advantages' } },
      { params: { id: 'weather' } },
      { params: { id: 'tourism' } }
    ],
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const rawData = await import(`../../articles/${id}.json`)
  const serializableObject = { /* your serializable data */ };
  return {
    props: {
      id,
      data : Object.assign({}, serializableObject, { data: JSON.stringify(rawData) })
    }
  };
}